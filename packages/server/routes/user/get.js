const getUserFromDB = require("../../controllers/user/get");

const getUser = async (fastify) => {
    fastify.get("/user/:email", async (req, res) => {
        const user = await getUserFromDB(req.params);
        res.status(200).send(user);
    });
};

module.exports = getUser;

