const { prisma } = require("../../helpers/db-client");
const updateBatchInDB = async (params, data) => {
    const { batch_id } = params;
    const { new_data } = data;

    const updateBatch = await prisma.batch.update({
        where: {
            batch_id: batch_id
        },
        data: {
            batch_name: new_data.batch_name,
            courses: {
                update: [...new_data.courses]
            }
        },
        // data: new_data
    })
    return updateBatch;
};
module.exports = updateBatchInDB;
