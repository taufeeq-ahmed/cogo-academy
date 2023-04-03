const getUserByBatchFromDB = require("../../controllers/user/getByBatch");


const getUserByBatch = async (fastify) => {
    fastify.get("/users_by_batch/:batch_id", async (req, res) => {
        const users = await getUserByBatchFromDB(req.params);
        res.status(200).send(users);
    });
};

module.exports = getUserByBatch;

