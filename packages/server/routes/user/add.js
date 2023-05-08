const addUserToDB = require("../../controllers/user/add");

const addUser = async (fastify) => {
    fastify.post("/user/add", async (req, res) => {
        const newUser = await addUserToDB(req.body);
        res.status(200).send(newUser);
    });
};
module.exports = addUser;
