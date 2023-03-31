const addSubmissionLinkMapToDB = require('../../controllers/SubmissionLinkMap/add');

const addSubmissionLinkMap = async (fastify) => {
    fastify.post("/submission-link-map/add", async (req, res) => {
        // console.log("This is being cvalled", req.body)
        
        const newMap = await addSubmissionLinkMapToDB(req.body);
        res.status(200).send(newMap);
    });
};


module.exports = addSubmissionLinkMap;






