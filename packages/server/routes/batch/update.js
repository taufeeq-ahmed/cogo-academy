const updateBatchInDB = require("../../controllers/batch/update");


const updateBatch = async (fastify) => {
    fastify.patch("/batch/:batch_id", async (req, res) => {
        try {
            const updatedBatch = await updateBatchInDB(req.params, req.body);
            res.status(200).send(updatedBatch);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = updateBatch;