const addLinkToDb = require("../../controllers/link/add")

const addLink = async (fastify) => {
    fastify.post("/link/add", async (req, res) => {
        const newLink = await addLinkToDb(req.body);
        res.status(200).send(newLink);
    })
}

module.exports = addLink;
