const { prisma } = require("../../helpers/db-client");

const getAllBatchesFromDB = async () => {
    try {
        const allBatches = await prisma.batch.findMany({
            include: {
                courses: true,
                users: true
            }
        });
        return allBatches;
    } catch (err) {
        console.log(err);
    }
};
module.exports = getAllBatchesFromDB;