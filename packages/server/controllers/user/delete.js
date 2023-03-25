const { prisma } = require("../../helpers/db-client");
const deleteUserFromDB = async (params) => {
    const { id } = params;
    const deletedUser = await prisma.Users.delete({
        where: {
            id: id,
        },
    })
    return deletedUser;
};
module.exports=deleteUserFromDB;