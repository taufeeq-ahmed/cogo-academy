const updateUserBatchesDB = require('../../controllers/user/updateUserBatches')

const updateUserBatches = async (fastify) => {
    fastify.post("/user/:user_id/update_batches", async (req, res) => {
        const newUser = await updateUserBatchesDB(req.body, req.params);
        res.status(200).send(newUser);
    });
};
module.exports = updateUserBatches;
