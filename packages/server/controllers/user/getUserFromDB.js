const { prisma } = require("../../helpers/db-client");
const getUserFromDB = async (params) => {
    const { email } = params;
    const user = await prisma.Users.findUnique({
        where: {
            email: email,
        },
    })
    return user;
};
module.exports=getUserFromDB;