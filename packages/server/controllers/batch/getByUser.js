const { prisma } = require("../../helpers/db-client");

const getAllBatchesFromUserFromDB = async (req) => {
    const { user_id } = req.user
    try {
        const allBatches = await prisma.batch.findMany({
            where: {
                users: {
                    some: {
                        user_id: user_id
                    }
                }
            },
        });
        return allBatches;
    } catch (err) {
        console.log(err);
    }
};
module.exports = getAllBatchesFromUserFromDB;