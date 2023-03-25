const { prisma } = require("../../helpers/db-client");
const getCourseFromDB = async (params) => {
    const { course_id } = params;
    // console.log(params)
    const Course = await prisma.Courses.findUnique({
        where: {
            course_id: course_id
        },
    })
    return Course;
};
module.exports =getCourseFromDB;