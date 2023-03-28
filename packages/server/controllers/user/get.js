const { prisma } = require("../../helpers/db-client");

const getUserFromDB = async (params) => {
    const { user_id } = params;
    const user = await prisma.User.findUnique({
        where: {
            user_id: user_id,
        },
    })
    return user;
};
module.exports = getUserFromDB;
