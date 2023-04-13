const { prisma } = require("../../helpers/db-client");

const getLeaderBoardByBatchFromDB = async (params) => {
    const { batch_id, rank_lte } = params
    const leaderBoardData = await prisma.user.findMany({
        where: {
            batches: {
                some: {
                    batch_id: batch_id,
                },
            },
            // user_rank: {
            //     lte: rank_lte
            // }
        },
        orderBy: {
            // user_rank: 'asc',
            total_score: 'desc'
        },
        take: rank_lte
    })

    return leaderBoardData;

}
module.exports = getLeaderBoardByBatchFromDB;
