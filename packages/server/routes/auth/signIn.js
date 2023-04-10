const bcrypt = require("bcrypt");
const { prisma } = require("../../helpers/db-client");
const signInUser = async (fastify) => {
    fastify.post('/users/login', async (req, res) => {
        const { email, password } = req.body

        // Query the database for the user's credentials
        console.log("email", email, "password", password)
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })


        if (!user) {
            res.status(401).send('Invalid username or password')
            return
        }

        // Compare the password with the hashed password in the database
        const passwordMatches = await bcrypt.compare(password, user.password)

        if (!passwordMatches) {
            res.status(401).send('Invalid username or password')
            return
        }

        // Generate a JWT with the user's information
        const token = fastify.jwt.sign({ user_name: user.user_name, email })

        // Return the JWT to the client
        res.send({ token })
    })
}

module.exports = signInUser;