const getArticlesBySectionIdFromDB = require("../../controllers/article/getBySectionId");

const getArticlesBySectionId = async (fastify) => {
    fastify.get("/:section_id/article", async (req, res) => {
        const articles = await getArticlesBySectionIdFromDB(req.params);
        console.log(articles)
        res.status(200).send(articles);
    })
}
module.exports = getArticlesBySectionId;
