const deleteBatchFromDB = require("../../controllers/batch/delete");


const deleteBatch = async (fastify) => {
    fastify.delete("/batch/:batch_id", async (req, res) => {
        try {
            const deletedBatch = await deleteBatchFromDB(req.params);
            res.status(200).send(deletedBatch);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = deleteBatch;