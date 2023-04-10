const { prisma } = require("../../helpers/db-client");

const deleteCourseFromDB = async (params) => {
    const { course_id } = params;
    const deletedCourse = await prisma.Course.delete({
        where: {
            course_id: course_id
        },
    })
    
    return deletedCourse;
    
};
module.exports =deleteCourseFromDB