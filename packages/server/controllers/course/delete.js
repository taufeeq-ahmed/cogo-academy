const { prisma } = require("../../helpers/db-client");
const deleteCourseFromDB = async (params) => {
    const { course_id } = params;
    // console.log(params)
    const deleteCourse = await prisma.Courses.delete({
        where: {
            course_id: course_id
        },
    })
    return deleteCourse;
};
module.exports =deleteCourseFromDB