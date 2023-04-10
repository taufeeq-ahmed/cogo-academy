const bcrypt = require("bcrypt");
const { prisma } = require("../../helpers/db-client");
const signInUser = async (fastify) => {
    fastify.post("/users/sign-in", async (req, res) => {
        console.log("In sign-in route")
        try {
            const user = await getUserFromDB(req.body);
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            console.log("The hashed is " + hashedPassword);
            console.log("The password is " + user.password);
            if (bcrypt.compare(req.body.password, hashedPassword)) res.send("valid user");
            else res.send("Invalid user")
        } catch (err) {
            console.log(err);
        }

        // Generate a JWT with the user's information
        const token = fastify.jwt.sign({ user_name: user.user_name, email })
        // const token = true

        // Return the JWT to the client
        res.send({ token })
    })
}

module.exports = signInUser;