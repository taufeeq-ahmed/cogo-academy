const { prisma } = require("../../helpers/db-client");
const getBatchFromDB = async (params) => {
    const { batch_id } = params;
    const batch = await prisma.Batch.findUnique({
        where: {
            batch_id: batch_id
        },
    })
    return batch;
};
module.exports = getBatchFromDB;
