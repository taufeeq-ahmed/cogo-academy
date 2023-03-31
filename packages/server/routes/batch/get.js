const getBatchFromDB = require("../../controllers/batch/get");


const getBatch = async (fastify) => {
    fastify.get("/batch/:batch_id", async (req, res) => {
        try {
            const batch = await getBatchFromDB(req.params);
            res.status(200).send(batch);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = getBatch;