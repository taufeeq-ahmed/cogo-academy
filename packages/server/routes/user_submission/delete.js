const deleteSubmissionLinkMapFromDB = require("../../controllers/user_submission/delete");


const deleteSubmissionLinkMap = async (fastify) => {
    fastify.delete("/user_submission/:user_id/:submission_id", async (req, res) => {
        const map = await deleteSubmissionLinkMapFromDB(req.params);
        res.status(200).send(map);
    });
};
module.exports = deleteSubmissionLinkMap;


