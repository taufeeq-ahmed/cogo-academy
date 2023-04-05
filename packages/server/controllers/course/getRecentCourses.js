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
            article: true
        },
        take: 2
    })
    return recentCourses;
};
module.exports = getRecentCoursesFromDB;

