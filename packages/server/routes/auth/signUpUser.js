const { addUsertoDB } = require("../../controllers/user");
const { prisma } = require("../../helpers/db-client");
const bcrypt = require("bcrypt");

const signUpUser = async (fastify) => {
    fastify.post("/users/sign-up", async (req, res) => {
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password = hashedPassword;
        // console.log(password);
        // console.log(req.body.password);
        try {
            const newUser = await addUsertoDB(req.body);
            res.send(newUser);
        } catch (err) {
            console.log(err);
        }

    });

}

module.exports = signUpUser;