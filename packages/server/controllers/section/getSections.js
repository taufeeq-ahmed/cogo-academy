const { prisma } = require("../../helpers/db-client");
const getSectionByCourseIdFromDB = require("./getByCourseId");
const getSectionsFromDB = async (params) => {
    const { user_id } = params
    const sections = await getSectionByCourseIdFromDB(params);


    const userArticles = await prisma.user_Article.findMany({
        where: {
            user_id: user_id
        },
        include: {
            article: {
                include: {
                    section: true

                }
            }
        },
    })

    const userSubmissions = await prisma.user_Submission.findMany({
        where: {
            user_id: user_id
        },
        include: {
            submission: {
                include: {
                    section: true
                }
            }
        },
    })

    const userExercises = await prisma.user_Exercise.findMany({
        where: {
            user_id: user_id
        },
        include: {
            exercise: {
                include: {
                    section: true
                }
            }
        },
    })


    const uniqueArt = new Map();
    const uniqueSub = new Map();
    const uniqueExer = new Map();
    userArticles && userArticles?.map((userArticle) => {
        const sectionId = userArticle?.article?.section?.section_id;
        const readArticlesCount = uniqueArt.get(sectionId) || 0;
        uniqueArt.set(sectionId, readArticlesCount + 1);

        const section = userArticle?.article?.section;
        if (readArticlesCount === 0) {
            return {
                ...section,
                first_article_id: userArticle?.article_id,
            };
        }
        return null
    })

    userSubmissions && userSubmissions?.map((userSubmission) => {
        const sectionId = userSubmission?.submission?.section?.section_id;
        const submissionsDone = uniqueSub.get(sectionId) || 0;
        uniqueSub.set(sectionId, submissionsDone + 1);

        const section = userSubmission?.submission?.section;
        if (submissionsDone === 0) {
            return {
                ...section,
                first_submission_id: userSubmission?.submission_id,
            };
        }
        return null
    })

    userExercises && userExercises?.map((userExercise) => {
        const sectionId = userExercise?.exercise?.section?.section_id;
        const exercisesDone = uniqueExer.get(sectionId) || 0;
        uniqueExer.set(sectionId, exercisesDone + 1);

        const section = userExercise?.exercise?.section;
        if (exercisesDone === 0) {
            return {
                ...section,
                first_exercise_id: userExercise?.exercise_id,
            };
        }
        return null
    })


    const newSections = sections?.map((sec) => {
        const { articles, submissions, exercises, ...section } = sec
        const firstArticleId = articles?.[0]?.article_id;
        const firstSubmissionId = submissions?.[0]?.submission_id;
        const firstExerciseId = exercises?.[0]?.exercise_id;
        // console.log(time_to_read)
        return {
            ...section,
            first_article_id: firstArticleId,
            first_submission_id: firstSubmissionId,
            first_exercise_id: firstExerciseId,
            number_of_articles: articles.length,
            number_of_submissions: submissions.length,
            number_of_exercises: exercises.length,
            image_url: sec.course.image_url,
            duration_in_minutes: articles.reduce((val, cur) => val + cur.article_time_in_mins, 0),
        };
    }).map((sec) => {
        return {
            ...sec,
            number_of_articles_read: uniqueArt.get(sec.section_id) || 0,
            number_of_submissions_done: uniqueSub.get(sec.section_id) || 0,
            number_of_exercises_done: uniqueSub.get(sec.section_id) || 0
        }
    })

    return newSections
};
module.exports = getSectionsFromDB;

