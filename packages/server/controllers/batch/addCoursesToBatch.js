const { prisma } = require("../../helpers/db-client");
const addCoursesToBatchToDB = async (data) => {
    const { courses, batch_id } = data;

    const result = await prisma.batch.update({
        where: {
            batch_id: batch_id
        },
        data: {
            courses: {
                set: courses,
            }
        },
    })
    return result;
};
module.exports = addCoursesToBatchToDB;
