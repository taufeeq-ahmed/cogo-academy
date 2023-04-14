const { prisma } = require("../../helpers/db-client");

const getAllBatchesWithoutDetailsFromDB = async () => {
    try {
        const allBatches = await prisma.batch.findMany({
            include: {
                courses: true
            }
        });
        return allBatches;
    } catch (err) {
        console.log(err);
    }
};
module.exports = getAllBatchesWithoutDetailsFromDB;