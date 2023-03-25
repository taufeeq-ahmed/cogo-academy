const { prisma } = require("../../helpers/db-client");
const getAllCourseFromDB = async (params) => {
    const allCourses = await prisma.Courses.findMany();
    return allCourses;
};
module.exports =getAllCourseFromDB;