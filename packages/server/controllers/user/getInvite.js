const { prisma } = require("../../helpers/db-client");
const getInviteUser = async ({ params = {} }) => {
    const { token } = params;
    console.log("token", token)
    const user = await prisma.UserInvites.findFirst({
        select: {
            email: true
        },
        where: {
            token: token,
        }
    });
    console.log("user", user)
    if (!user) {
        return ({ message: 'Invalid Invitation Link' });
    }
    return user;
};


module.exports = getInviteUser;
