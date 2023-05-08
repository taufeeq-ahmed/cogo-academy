const getSubmissionLinkMapFromDB = require("../../controllers/user_submission/get");


const getSubmissionLinkMap = async (fastify) => {
    fastify.get("/user_submission/:user_id/:submission_id", async (req, res) => {
        const map = await getSubmissionLinkMapFromDB(req.params);

        res.status(200).send(map);
    });
};
module.exports = getSubmissionLinkMap;


