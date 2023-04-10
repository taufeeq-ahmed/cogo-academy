const updateUserInDB = require("../../controllers/user/update");

const updateUser = async (fastify) => {
    fastify.patch("/user/:user_id", async (req, res) => {
        const user = await updateUserInDB(req.params, req.body);
        res.status(200).send(user);
    });
};

module.exports = updateUser;


