const { prisma } = require("../../helpers/db-client");

const getLeaderBoardByBatchFromDB = async (params, query) => {
    const { rank_lte } = params
    const { batch_id } = query

    const leaderBoardData = await prisma.user.findMany({
        where: {
            batches: {
                some: {
                    batch_id: batch_id,
                },
            },
        },
        orderBy: {
            total_score: 'desc'
        },
        take: rank_lte
    })

    return leaderBoardData;

}
module.exports = getLeaderBoardByBatchFromDB;
