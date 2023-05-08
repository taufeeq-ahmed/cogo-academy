const getPlaygroundDataFromDB = require("../../controllers/pages/playground");

const getPlaygroundData = async (fastify) => {
    fastify.get("/playground/:section_id/:type/:element_id", async (req, res) => {
        const playgroundData = await getPlaygroundDataFromDB(req);
        res.status(200).send(playgroundData);
    });
};
module.exports = getPlaygroundData;
