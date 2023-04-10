const { prisma } = require("../../helpers/db-client");

const updateUserInDB = async (params, data) => {
    const { user_id } = params;
    console.log("user_id", user_id)
    const { new_data } = data;
    console.log("newdata", new_data)
    const updatedUser = await prisma.User.update({
        where: {
            user_id: user_id,
        },
        data: new_data
    })
    return updatedUser;
};
module.exports = updateUserInDB;
