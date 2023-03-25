const { prisma } = require("../../helpers/db-client");
const addCoursetoDB = async (params) => {
    const { course_name } = params;

    const newCourse = await prisma.Courses.create({
        data: {
            course_name
        },
    })
    return newCourse;
};
module.exports =addCoursetoDB;