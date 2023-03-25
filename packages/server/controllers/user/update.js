const { prisma } = require("../../helpers/db-client");
const updateUserFromDB = async ({ id, password, newData }) => {

    const updatedUser = await prisma.Users.update({
        where: {
            id: id,
        },
        data: newData
    })
    return updatedUser;
};
module.exports=updateUserFromDB;