const { prisma } = require("../../helpers/db-client");

const getCoursesDoneFromDB = async (params) => {
    const { user_id } = params
    const coursesDone = await prisma.user.findUnique({
        where: {
            user_id: user_id
        },
        select: {
            user_article: {
                select: {
                    score: true,
                    article: {
                        select: {
                            section: {
                                select: {
                                    course: true
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    const coursesScores = {};

    coursesDone.user_article.forEach((item) => {
        const courseId = item.article.section.course.course_id;
        const courseName = item.article.section.course.course_name;
        const score = item.score;
        if (!coursesScores[courseId]) {
            coursesScores[courseId] = { name: courseName, score: score };
        } else {
            coursesScores[courseId].score += score;
        }
    });

    const result = Object.keys(coursesScores).map((courseId) => ({
        course_id: courseId,
        course_name: coursesScores[courseId].name,
        total_score: coursesScores[courseId].score,
    }));

    return result

}
module.exports = getCoursesDoneFromDB;
