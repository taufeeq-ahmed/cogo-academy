const { prisma } = require("../../helpers/db-client");

const getAllCoursesWithDetailsFromDB = async () => {
    try {
        const allCourses = await prisma.Course.findMany({
            include: {
                batches: true,
                sections: true
            }
        });
        return allCourses;
    } catch (err) {
        console.log(err);
    }
};
module.exports = getAllCoursesWithDetailsFromDB;