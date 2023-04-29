const { prisma } = require("../../helpers/db-client");
const bcrypt = require("bcrypt");

const changepassword = async (body) => {
    const { email, password,} = body

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.User.update({
        data: {
            password: hashedPassword,
        },
        where:{
            email:email
        }
    })
    return newUser
}

module.exports = changepassword