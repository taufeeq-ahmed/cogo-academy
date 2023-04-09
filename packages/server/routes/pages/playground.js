const getPlaygroundDataFromDB = require("../../controllers/pages/playground");

const getPlaygroundData = async (fastify) => {
    fastify.get("/playground/:section_id/:type/:element_id", async (req, res) => {
        console.log("headers", req.headers)
        req.params.user_id = req.user.user_id
        const playgroundData = await getPlaygroundDataFromDB(req.params, req.params.type);
        res.status(200).send(playgroundData);
    });
};
module.exports = getPlaygroundData;
