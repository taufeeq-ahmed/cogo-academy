const { prisma } = require("../../helpers/db-client");

const addCourseToBatchDB = async (data) => {
    const { batch_id = '', course_id = '' } = data;

    const newMap = await prisma.batch_Course.create({
        data: {
            batch_id: batch_id,
            course_id: course_id,
        }
    })
    return newMap;
};
module.exports = addCourseToBatchDB;
