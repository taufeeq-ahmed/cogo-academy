const getArticleFromDB = require("../../controllers/article/get");

const getArticle = async (fastify) => {
    fastify.get("/article/:article_id", async (req, res) => {
        const newArticle = await getArticleFromDB(req.params);
        res.status(200).send(newArticle);
    });
};
module.exports = getArticle;

