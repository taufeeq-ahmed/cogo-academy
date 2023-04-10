const updateSubmissionLinkMapInDB = require("../../controllers/user_submission/update");


const updateSubmissionLinkMap = async (fastify) => {
    fastify.patch("/user_submission/:user_id/:submission_id", async (req, res) => {
        const updatedMap = await updateSubmissionLinkMapInDB(req.params, req.body);
        res.status(200).send(updatedMap);
    });
};
module.exports = updateSubmissionLinkMap;


