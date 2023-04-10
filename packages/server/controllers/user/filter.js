const { prisma } = require("../../helpers/db-client");

const getFilteredUsersFromDB = async (query) => {
    const { q, batch_id, track_id } = query
    const filteredUsers = await prisma.user.findMany({
        where: {
            batch_id: batch_id,
            track_id: track_id,
            user_name: {
                contains: q,
                mode: 'insensitive'
            }
        },
        include: {
            track: true,
            batch: true
        },
        orderBy: {
            user_rank: 'asc'
        },

    })

    return filteredUsers;

}
module.exports = getFilteredUsersFromDB;
