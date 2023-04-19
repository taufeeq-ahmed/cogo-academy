const { prisma } = require("../../helpers/db-client");

const getFilteredUsersFromDB = async (query) => {
    const { q, batch_id, track_id } = query
    const filteredUsers = await prisma.user.findMany({
        where: {
            ...(batch_id && {
                batches: {
                    some: {
                        batch_id: batch_id,
                    },
                }
            }),
            ...(track_id && {
                track_id: track_id
            }),
            user_name: {
                contains: q,
                mode: 'insensitive'
            }
        },
        include: {
            track: true,
            batches: true,
            _count: {
                select: {
                    user_article: true
                }
            }
        },
        orderBy: {
            user_rank: 'asc'
        },

    })

    const users = filteredUsers.map((user) => {
        return {
            ...user,
            number_of_articles_read: user._count.user_article
        }
    })



    return users;

}
module.exports = getFilteredUsersFromDB;
