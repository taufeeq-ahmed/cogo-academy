const addCourseToBatchDB = require("../../controllers/batch_course/add");



const addCourseToBatch = async (fastify) => {
    fastify.post("/batch_course", async (req, res) => {
        try {
            const newBatch = await addCourseToBatchDB(req.body);
            res.status(200).send(newBatch);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = addCourseToBatch;