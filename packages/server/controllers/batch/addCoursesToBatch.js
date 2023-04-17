const { prisma } = require("../../helpers/db-client");
const addCoursesToBatchToDB = async (params, body) => {
    const { batch_id } = params;
    const { courses } = body.new_data;

    console.log("---------------------")
    console.log(courses)

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
