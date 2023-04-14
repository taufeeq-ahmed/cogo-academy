const { prisma } = require("../../helpers/db-client");
const addCoursesToBatchToDB = async (params, body) => {
    const { batch_id } = params;
    const { courses } = body;

    const result = await prisma.batch.update({
        where: {
            batch_id: batch_id
        },
        data: {
            courses: {
                set: courses.map((c) => {
                    return { course_id: c.course_id };
                })
            }
        }
    })
    return result;
};
module.exports = addCoursesToBatchToDB;
