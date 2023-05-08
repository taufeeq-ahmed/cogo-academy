const getLinkFromDB = require("../../controllers/link/get")

const getLink = async (fastify) => {
    fastify.get("/link/:link_id", async (req, res) => {
        const link = await getLinkFromDB(req.params);
        res.status(200).send(link);
    })
}
module.exports = getLink;
