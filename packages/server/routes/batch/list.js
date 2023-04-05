const getAllBatchesFromDB = require("../../controllers/batch/list");

const getAllBatches = async (fastify) => {
    fastify.get("/batch/list", async (req, res) => {
        try {
            const batches = await getAllBatchesFromDB();
            res.status(200).send(batches);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = getAllBatches;