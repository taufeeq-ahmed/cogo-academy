const updateLinkInDB = require("../../controllers/link/update")

const updateLink = async (fastify) => {
    fastify.patch("/link/:link_id", async (req, res) => {
        const updatedLink = await updateLinkInDB(req.params, req.body);
        res.status(200).send(updatedLink);
    })
}
module.exports = updateLink;

