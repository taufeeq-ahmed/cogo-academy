const { prisma } = require("../../helpers/db-client");

const deleteUserFromDB = async (params) => {
    const { user_id } = params;
    const deletedUser = await prisma.User.delete({
        where: {
            user_id: user_id,
        },
    })
    return deletedUser;
};
module.exports = deleteUserFromDB;