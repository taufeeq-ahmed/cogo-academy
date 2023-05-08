const addSubmissionLinkMapToDB = require("../../controllers/user_submission/add");


const addSubmissionLinkMap = async (fastify) => {
    fastify.post("/user_submission/:submission_id/add", async (req, res) => {
        req.params.user_id = req.user.user_id
        const newMap = await addSubmissionLinkMapToDB(req.params, req.body);
        res.status(200).send(newMap);
    });
};


module.exports = addSubmissionLinkMap;






