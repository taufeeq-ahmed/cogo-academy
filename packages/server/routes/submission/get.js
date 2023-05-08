const getSubmissionFromDB = require('../../controllers/submission/get')

const getSubmission = async (fastify) => {
    fastify.get("/submission/:submission_id", async (req, res) => {
        const submission = await getSubmissionFromDB(req.params);
        res.status(200).send(submission);
    });
};
module.exports = getSubmission;

