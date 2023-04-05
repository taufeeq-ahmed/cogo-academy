const { prisma } = require("../../helpers/db-client");

const getUserByBatchFromDB = async (params) => {
    const { batch_id } = params;
    const usersByBatch = await prisma.User.findMany(
        {
            where: {
                batch_id: batch_id
            },
            include: {
                track: true
            }
        }
    )
    return usersByBatch;
}
module.exports = getUserByBatchFromDB;
