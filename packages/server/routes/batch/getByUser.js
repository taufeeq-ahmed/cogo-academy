const getAllBatchesFromUserFromDB = require("../../controllers/batch/getByUser");


const getAllBatchesFromUser = async (fastify) => {
    fastify.get("/batch/list/byuser", async (req, res) => {
        try {
            const batches = await getAllBatchesFromUserFromDB(req);
            res.status(200).send(batches);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = getAllBatchesFromUser;