const deleteUserFromDB = require("../../controllers/user/delete");

const deleteUser = async (fastify) => {
    fastify.delete("/user/:user_id", async (req, res) => {
        const deletedUser = await deleteUserFromDB(req.params);
        res.status(200).send(deletedUser);
    });
};

module.exports = deleteUser;

