const updateUserBatchesDB = require('../../controllers/user/updateUserBatches')

const updateUserBatches = async (fastify) => {
    fastify.post("/user/update_batches", async (req, res) => {
        const newUser = await updateUserBatchesDB(req.body, req.user);
        res.status(200).send(newUser);
    });
};
module.exports = updateUserBatches;
