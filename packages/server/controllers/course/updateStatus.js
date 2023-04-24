const { prisma } = require("../../helpers/db-client");
const updateStatusCourseInDB = async (params, body) => {
    const { course_id } = params;
    const {isActive}=body
    const updatedCourse = await prisma.Course.update({
        where: {
            course_id: course_id
        },
        data: {
            isActive:!isActive,
        }
    })
    return updatedCourse;
};
module.exports = updateStatusCourseInDB;