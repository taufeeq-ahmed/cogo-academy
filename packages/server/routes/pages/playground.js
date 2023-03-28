const getPlaygroundDataFromDB = require("../../controllers/pages/playground");

const getPlaygroundData = async (fastify) => {
    fastify.get("/playground/:section_id/:type/:element_id", async (req, res) => {
        const playgroundData = await getPlaygroundDataFromDB(req.params, req.params.type);
        res.status(200).send(playgroundData);
    });
    fastify.post("/playground/:section_id/:type/:element_id", async (req, res) => {
        const mapEntry = await addSubmissionLinkMapToDB(req.body);
        res.status(200).send(mapEntry);
    });
};
module.exports = getPlaygroundData;
