const { prisma } = require("../../helpers/db-client");

const getAllCoursesFromDB = async () => {
    try {
        const allCourses = await prisma.Course.findMany();
        return allCourses;
    } catch (err) {
        console.log(err);
    }
};
module.exports = getAllCoursesFromDB;