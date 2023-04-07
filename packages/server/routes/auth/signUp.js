const { prisma } = require("../../helpers/db-client");
const bcrypt = require("bcrypt");
const signUpUser = async (fastify) => {
    fastify.post('/users/register', async (req, res) => {
        const { user_name, email, password } = req.body

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10)

        // Insert the user's credentials into the database
        try {
            const newUser = await prisma.user.create({ data: { user_name, email, password: hashedPassword } })
            res.send(newUser);
        } catch (error) {
            res.status(500).send('Error registering user')
        }
    })
}



module.exports = signUpUser;