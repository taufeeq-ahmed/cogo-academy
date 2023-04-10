const deleteArticleFromDB = require('../../controllers/article/delete')
const deleteArticle = async (fastify) => {
    fastify.delete("/article/:article_id", async (req, res) => {
        try {
            const deletedArticle = await deleteArticleFromDB(req.params);
            res.status(200).send(deletedArticle);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = deleteArticle;

