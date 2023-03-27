const updateArticleInDB = require("../../controllers/article/update");

const updateArticle = async (fastify) => {
    fastify.patch("/article/:article_id", async (req, res) => {
        const updatedArticle = await updateArticleInDB(req.params, req.body);
        res.status(200).send(updatedArticle);
    });
}
module.exports = updateArticle;