const { prisma } = require("../../helpers/db-client");
const addCoursetoDB = async (data) => {
    const { course_name } = data;

    const newCourse = await prisma.Course.create({
        data: {
            course_name
        },
    })
    return newCourse;
};
module.exports = addCoursetoDB;
