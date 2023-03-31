const addBatchtoDB = require("../../controllers/batch/add");

const addBatch = async (fastify) => {
    fastify.post("/batch", async (req, res) => {
        console.log(req.body)
        try {
            const newBatch = await addBatchtoDB(req.body);
            res.status(200).send(newBatch);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = addBatch;