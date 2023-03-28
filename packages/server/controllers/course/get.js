const { prisma } = require("../../helpers/db-client");
const getCourseFromDB = async (params) => {
    const { course_id } = params;
    const course = await prisma.Course.findUnique({
        where: {
            course_id: course_id
        },
    })
    return course;
};
module.exports = getCourseFromDB;

