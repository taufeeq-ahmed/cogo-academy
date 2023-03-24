const { prisma } = require("../../helpers/db-client");
const bcrypt = require("bcrypt");
const getUserFromDB = require("../../controllers/user/getUserFromDB");
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

    });
}

module.exports = signInUser;