const deleteUsersFromBatchToDB = require("../../controllers/batch/deleteUsersFromBatch");
const deleteUsersFromBatch= async(fastify)=>{
    fastify.delete("/batch/:batch_id/delete_users", async (req, res) => {
        try {
            const result = await deleteUsersFromBatchToDB(req.params, req.body);
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
        }
    });
}
module.exports=deleteUsersFromBatch;