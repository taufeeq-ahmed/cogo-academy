const deleteCourseFromBatchToDB = require("../../controllers/batch/deleteCourseFromBatch");
const deleteCourseFromBatch=async(fastify)=>{
    fastify.delete("/batch/:batch_id/delete_courses", async (req, res) => {
        try {
            const result = await deleteCourseFromBatchToDB(req.params, req.body);
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
        }
    });
}
module.exports=deleteCourseFromBatch;