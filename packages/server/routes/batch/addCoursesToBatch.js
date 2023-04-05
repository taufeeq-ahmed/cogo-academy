const addCoursesToBatchToDB = require("../../controllers/batch/addCoursesToBatch");


const addCourseToBatch = async (fastify) => {
    fastify.post("/batch/:batch_id/add_courses", async (req, res) => {
        try {
            const result = await addCoursesToBatchToDB(req.params, req.body);
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = addCourseToBatch;