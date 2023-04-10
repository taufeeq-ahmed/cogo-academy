const addSubmissionLinkMapToDB = require("../../controllers/user_submission/add");


const addSubmissionLinkMap = async (fastify) => {
    fastify.post("/user_submission/add", async (req, res) => {

        const newMap = await addSubmissionLinkMapToDB(req.body);
        res.status(200).send(newMap);
    });
};


module.exports = addSubmissionLinkMap;






