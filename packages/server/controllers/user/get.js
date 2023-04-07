const { prisma } = require("../../helpers/db-client");

const getUserFromDB = async (params) => {
    const { user_id } = params;
    const user = await prisma.User.findMany({
        where: {
            user_id: user_id,
        },
        include: {
            batch: true,
            track: true
        }
    })
    return user;
};
module.exports = getUserFromDB;
