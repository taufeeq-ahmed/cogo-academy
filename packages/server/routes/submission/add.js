const addSubmissionToDB = require('../../controllers/submission/add');

const addSubmission = async (fastify) => {
    fastify.post("/submission/:section_id/add", async (req, res) => {
        const newSubmission = await addSubmissionToDB(req.params, req.body);
        res.status(200).send(newSubmission);
    });
};
module.exports = addSubmission;


