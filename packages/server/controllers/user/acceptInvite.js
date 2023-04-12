const bcrypt = require('bcrypt');
const { prisma } = require('../../helpers/db-client');

const acceptInvite = async ({ data = {} }) => {
    const { user_name: userName, email, password, github_username: gitUserName, token } = data.body;

    const check = await prisma.userInvites.findUnique({
        where: {
            email: email
        }
    })

    if (!check) {
        return ({ message: 'Not invited' });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        }
    })



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


    const deleteUserInvite = await prisma.userInvites.delete({
        where: {
            email: email
        }
    })


    return createuser;
};

module.exports = acceptInvite;

