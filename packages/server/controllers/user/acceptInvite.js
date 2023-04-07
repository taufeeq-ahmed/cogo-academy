const bcrypt = require('bcrypt');
const { prisma } = require('../../helpers/db-client');

const acceptInvite = async ({ data = {} }) => {
    const { user_name: userName, email, password, github_username: gitUserName, token } = data.body;

    console.log("data", data)

    const user = await prisma.user.findFirst({
        where: {
            email: email,
        }
    })

    console.log("user", user)


    if (user) {
        return ({ message: 'User with entered email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createuser = await prisma.user.create({
        data: {
            user_name: userName,
            email: email,
            password: hashedPassword,
            github_username: gitUserName,
        },
    })

    console.log("new user", createuser)


    const deleteUserInvite = await prisma.UserInvites.delete({
        where: {
            email: email
        }
    })

    console.log("delete", deleteUserInvite)

    return createuser;
};

module.exports = acceptInvite;

