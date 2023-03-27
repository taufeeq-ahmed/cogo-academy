const deleteLinkFromDB = require("../../controllers/link/delete")

const deleteLink = async (fastify) => {
    fastify.delete("/link/:link_id", async (req, res) => {
        const deletedLink = await deleteLinkFromDB(req.params);
        res.status(200).send(deleteLink);
    })
}
module.exports = deleteLink;
