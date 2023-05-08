const addUsersToBatchToDB = require("../../controllers/batch/addStudentsToBatch");

const addUsersToBatch = async (fastify) => {
    fastify.post("/batch/:batch_id/add_users", async (req, res) => {
        try {
            const result = await addUsersToBatchToDB(req.params, req.body);
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = addUsersToBatch;