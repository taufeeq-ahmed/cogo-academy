const { prisma } = require("../../helpers/db-client");

const getSectionByCourseIdFromDB = async (params) => {
    const { course_id } = params;
    const sections = await prisma.section.findMany({
        where: {
            course_id: course_id,
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
        },
        // orderBy: {
        //     created_on: 'desc'
        // }
    })
    return sections;
};
module.exports = getSectionByCourseIdFromDB;