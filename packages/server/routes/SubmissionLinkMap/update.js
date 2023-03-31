const updateSubmissionLinkMapInDB = require('../../controllers/SubmissionLinkMap/update');

const updateSubmissionLinkMap = async (fastify) => {
    fastify.patch("/submission-link-map/:user_id/:submission_id", async (req, res) => {
        const updatedMap = await updateSubmissionLinkMapInDB(req.params, req.body);
        res.status(200).send(updatedMap);
    });
};
module.exports = updateSubmissionLinkMap;


