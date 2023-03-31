const deleteSubmissionLinkMapFromDB = require('../../controllers/SubmissionLinkMap/delete');

const deleteSubmissionLinkMap = async (fastify) => {
    fastify.delete("/submission-link-map/:user_id/:submission_id", async (req, res) => {
        const map = await deleteSubmissionLinkMapFromDB(req.params);
        res.status(200).send(map);
    });
};
module.exports = deleteSubmissionLinkMap;


