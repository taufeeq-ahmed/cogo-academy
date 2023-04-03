const addCoursesToBatchToDB = require("../../controllers/batch/addCoursesToBatch");


const addCourseToBatch = async (fastify) => {
    fastify.post("/batch/add_courses", async (req, res) => {
        try {
            const result = await addCoursesToBatchToDB(req.body);
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = addCourseToBatch;