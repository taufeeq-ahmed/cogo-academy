const { prisma } = require("../../helpers/db-client");

const getSectionByCourseIdFromDB = async (params) => {
    const { course_id } = params;
    const sections = await prisma.Section.findMany({
        where: {
            course_id: course_id
        },
        include: {
            articles: {
                select: {
                    article_id: true
                },
                take: 1
            },
            submissions: {
                select: {
                    submission_id: true
                },
                take: 1
            }
        }
    })
    return sections;
};
module.exports = getSectionByCourseIdFromDB;