const { prisma } = require("../../helpers/db-client");
const updateCourseInDB = async (params, data) => {
    const { course_id } = params;
    const { new_data } = data;
    const updatedCourse = await prisma.Course.update({
        where: {
            course_id: course_id
        },
        data: new_data
    })
    return updatedCourse;
};
module.exports = updateCourseInDB;
