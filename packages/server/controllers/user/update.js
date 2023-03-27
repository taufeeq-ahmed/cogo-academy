const { prisma } = require("../../helpers/db-client");

const updateUserInDB = async (params, data) => {
    const { user_id } = params;
    const { new_data } = data;
    const updatedUser = await prisma.User.update({
        where: {
            user_id: user_id,
        },
        data: new_data
    })
    return updatedUser;
};
module.exports = updateUserInDB;