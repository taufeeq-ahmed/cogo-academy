const { prisma } = require("../../helpers/db-client");

const getBatchCourseFromDB = async (params) => {
    const { batch_id } = params;
    const course = await prisma.batch_Course.findMany({
        where: {
            batch_id: batch_id
        },
    })
    return course;
};
module.exports = getBatchCourseFromDB;

