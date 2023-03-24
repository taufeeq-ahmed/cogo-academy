const { prisma } = require("../../helpers/db-client");
const updateCourseFromDB = async (params) => {
    const { course_name } = params;
    // console.log(params)
    const updateCourse = await prisma.Courses.update({
        where: {
            course_name: course_name
        },
        data: {
            course_name: course_name
        }
    })
    return updateCourse;
};
module.exports =updateCourseFromDB;