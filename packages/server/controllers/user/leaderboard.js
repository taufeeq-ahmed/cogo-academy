const { prisma } = require("../../helpers/db-client");

const getLeaderBoardByBatchFromDB = async (params) => {
    const { batch_id } = params
    const leaderBoardData = await prisma.user.findMany({
        where: {
            batch_id: batch_id,
            user_rank: {
                lte: 5
            }
        },
        orderBy: {
            user_rank: 'asc'
        },

    })

    return leaderBoardData;

}
module.exports = getLeaderBoardByBatchFromDB;
