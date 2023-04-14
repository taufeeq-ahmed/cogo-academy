const { prisma } = require("../../helpers/db-client");

const getAllBatchesWithoutDetailsFromDB = async () => {
    try {
        const allBatches = await prisma.batch.findMany({

        });
        return allBatches;
    } catch (err) {
        console.log(err);
    }
};
module.exports = getAllBatchesWithoutDetailsFromDB;