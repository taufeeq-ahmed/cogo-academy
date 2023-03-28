const getArticlesBySectionIdFromDB = require("../../controllers/article/getBySectionId");

const getArticlesBySectionId = async (fastify) => {
    fastify.get("/article/section/:section_id", async (req, res) => {
        const articles = await getArticlesBySectionIdFromDB(req.params);
        res.status(200).send(articles);
    })
}
module.exports = getArticlesBySectionId;
