const { prisma } = require("../../helpers/db-client");
const getRecentCoursesFromDB = async (params) => {
    const { user_id } = params
    const recentCourses = await prisma.user_Article.findMany({
        where: {
            user_id: user_id
        },
        orderBy: {
            updated_on: 'desc'
        },
        include: {
            article: {
                include: {
                    section: true
                }
            }
        },
        take: 2
    })
    const uniqueSections = new Set()
    const filteredRecentCourses = recentCourses.filter((course) => {
        const fl = uniqueSections.has(course.article.section.section_id)
        uniqueSections.add(course.article.section.section_id);
        return !fl
    })
    console.log("fdfs", filteredRecentCourses)
    return filteredRecentCourses;
};
module.exports = getRecentCoursesFromDB;

