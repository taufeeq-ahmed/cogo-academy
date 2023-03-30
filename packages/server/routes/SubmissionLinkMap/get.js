const getSubmissionLinkMapFromDB = require('../../controllers/SubmissionLinkMap/get');

const getSubmissionLinkMap = async (fastify) => {
    fastify.get("/submission-link-map/:user_id/:submission_id", async (req, res) => {
        const map = await getSubmissionLinkMapFromDB(req.params);
        res.status(200).send(map);
    });
};
module.exports = getSubmissionLinkMap;


