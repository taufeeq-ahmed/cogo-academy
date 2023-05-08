
const getAllBatchesWithoutDetailsFromDB = require("../../controllers/batch/listWithoutDetails");

const getAllBatchesWithoutDetails = async (fastify) => {
    fastify.get("/batch/list/only-batches", async (req, res) => {
        try {
            const batches = await getAllBatchesWithoutDetailsFromDB();
            res.status(200).send({ user: req.user, batches });
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = getAllBatchesWithoutDetails;