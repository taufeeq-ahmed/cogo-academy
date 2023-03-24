const { prisma } = require("../../helpers/db-client");
const getCourseFromDB = async (params) => {
    const { course_name } = params;
    // console.log(params)
    const Course = await prisma.Courses.findUnique({
        where: {
            course_name: course_name
        },
    })
    return Course;
};
module.exports =getCourseFromDB;