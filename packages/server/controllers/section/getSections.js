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


    const uniqueElem = new Map();
    const filteredRecentSections = userArticles && userArticles?.map((userArticle) => {
        const sectionId = userArticle?.article?.section?.section_id;
        const readArticlesCount = uniqueElem.get(sectionId) || 0;
        uniqueElem.set(sectionId, readArticlesCount + 1);

        const section = userArticle?.article?.section;
        if (readArticlesCount === 0) {
            return {
                ...section,
                first_article_id: userArticle?.article_id,
            };
        }
        return null
    })


    const newSections = sections?.map((sec) => {
        const { articles, submissions, ...section } = sec
        const firstArticleId = articles?.[0]?.article_id;
        const firstSubmissionId = submissions?.[0]?.submission_id;
        return {
            ...section,
            first_article_id: firstArticleId,
            first_submission_id: firstSubmissionId,
            number_of_articles: articles.length,
            image_url: sec.course.image_url
        };
    }).map((sec) => {
        return {
            ...sec,
            number_of_articles_read: uniqueElem.get(sec.section_id) || 0
        }
    })

    return newSections
};
module.exports = getSectionsFromDB;

