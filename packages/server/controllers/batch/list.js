const { prisma } = require("../../helpers/db-client");

const getAllBatchesFromDB = async () => {
    try {
        const allBatches = await prisma.Batch.findMany({
            include: {
                courses: true
            }
        });
        return allBatches;
    } catch (err) {
        console.log(err);
    }
};
module.exports = getAllBatchesFromDB;