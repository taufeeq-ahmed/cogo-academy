const { prisma } = require("../../helpers/db-client");
const getBatchFromDB = async (params) => {
    const { batch_id } = params;
    const batch = await prisma.Batch.findMany({
        where: {
            batch_id: batch_id
        },
        include: {
            courses: true
        }
    })
    return batch;
};
module.exports = getBatchFromDB;
