const { prisma } = require("../../helpers/db-client");

const getLeaderBoardByBatchFromDB = async (params) => {
    const { batch_id, rank_lte } = params
    // const whereCondition =
    // if (rank_lte) {
    //     whereCondition.
    // }
    const leaderBoardData = await prisma.user.findMany({
        where: {
            batch_id: batch_id,
            user_rank: {
                lte: rank_lte
            }
        },
        orderBy: {
            user_rank: 'asc'
        },

    })

    return leaderBoardData;

}
module.exports = getLeaderBoardByBatchFromDB;
