const { prisma } = require("../../helpers/db-client");
const updateBatchInDB = async (params, data) => {
    const { batch_id } = params;
    const { new_data } = data;
    const updateBatch = await prisma.Batch.update({
        where: {
            batch_id: batch_id
        },
        data: new_data
    })
    return updateBatch;
};
module.exports = updateBatchInDB;
