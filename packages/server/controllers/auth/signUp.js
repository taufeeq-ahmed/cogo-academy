const { prisma } = require("../../helpers/db-client");
const bcrypt = require("bcrypt");

const signUpUserToDB = async (body) => {
    const { user_name, email, password, github_username } = body

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.User.create({
        data: {
            user_name: user_name,
            email: email,
            password: hashedPassword,
            github_username
        }
    })
    return newUser
}

module.exports = signUpUserToDB