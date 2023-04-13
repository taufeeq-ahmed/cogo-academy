const { prisma } = require("../../helpers/db-client");

const getUserFromDB = async (params) => {
    const { user_id } = params;
    const user = await prisma.User.findUnique({
        where: {
            batches: {
                some: {
                    batch_id: batch_id,
                },
            },
        },
        include: {
            batches: true,
            track: true
        }
    })
    return user;
};
module.exports = getUserFromDB;
