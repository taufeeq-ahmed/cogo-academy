const { prisma } = require("../../helpers/db-client");

const deleteBatchFromDB = async (params) => {
    const { batch_id } = params;
    const deletedBatch = await prisma.Batch.delete({
        where: {
            batch_id: batch_id
        },
    })
    return deletedBatch;
};
module.exports = deleteBatchFromDB