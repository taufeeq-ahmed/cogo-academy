const deleteSubmissionFromDB = require('../../controllers/submission/delete')

const deleteSubmission = async (fastify) => {
    fastify.delete("/submission/:submission_id", async (req, res) => {
        const deletedSubmission = await deleteSubmissionFromDB(req.params);
        res.status(200).send(deletedSubmission);
    });
}
module.exports = deleteSubmission;