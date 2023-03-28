const updateSubmissionInDB = require('../../controllers/submission/update')

const updateSubmission = async (fastify) => {
    fastify.patch("/submission/:submission_id", async (req, res) => {
        const updatedSubmission = await updateSubmissionInDB(req.params, req.body);
        res.status(200).send(updatedSubmission);
    });
}
module.exports = updateSubmission;
