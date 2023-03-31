const { prisma } = require("../../helpers/db-client");

const getLeaderBoardFromDB = async () => {

    const leaderBoardData = await prisma.User.findMany({
        select: {
            user_name: true,
            total_score: true,
            user_rank: true,
        },
        orderBy: {
            user_rank: 'asc'
        }
    })

    return leaderBoardData;

}
module.exports = getLeaderBoardFromDB;
