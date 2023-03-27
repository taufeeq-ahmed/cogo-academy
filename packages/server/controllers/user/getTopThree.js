const { prisma } = require("../../helpers/db-client");

const getTopThreeUsersFromDB = async () => {

    const topThreeUsers = await prisma.User.findMany({
        where: {
            user_rank: { in: [1, 2, 3] }
        },
    })
    const topThreeUsersData = topThreeUsers.map((user) => {
        return {
            user_name: user.user_name,
            total_score: user.total_score,
            user_rank: user.user_rank
        }
    })
    return topThreeUsersData;

}
module.exports = getTopThreeUsersFromDB;