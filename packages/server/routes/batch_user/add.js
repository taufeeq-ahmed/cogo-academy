const addUserToBatchDB = require("../../controllers/batch_user/add");

const addUserToBatch = async (fastify) => {
    fastify.post("/batch_user", async (req, res) => {
        try {
            const newBatch = await addUserToBatchDB(req.body);
            res.status(200).send(newBatch);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = addUserToBatch;