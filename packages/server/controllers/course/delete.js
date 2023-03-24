const { prisma } = require("../../helpers/db-client");
const deleteCourseFromDB = async (params) => {
    const { course_name } = params;
    // console.log(params)
    const deleteCourse = await prisma.Courses.delete({
        where: {
            course_name: course_name
        },
    })
    return deleteCourse;
};
module.exports =deleteCourseFromDB