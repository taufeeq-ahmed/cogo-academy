const { prisma } = require("../../helpers/db-client");

const getTopThreeUsersFromDB = async () => {

    const topThreeUsers = await prisma.User.findMany({
        where: {
            user_rank: { in: [1, 2, 3] }
        },
        select: {
            user_name: true,
            total_score: true,
            user_rank: true,
        },
        orderBy: {
            user_rank: 'asc'  // messages for each converastion will be ordered newest first. 
        }
    })

    return topThreeUsers;

}
module.exports = getTopThreeUsersFromDB;
