const getBatchFromDB = require("../../controllers/batch/get");
// const getBatchCourseFromDB = require("../../controllers/batch_course/get");


const getBatch = async (fastify) => {
    fastify.get("/batch/:batch_id", async (req, res) => {
        try {
            const batchWithCourses = await getBatchFromDB(req.params);
            // const courses = await getBatchCourseFromDB(req.params)
            res.status(200).send(batchWithCourses);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = getBatch;