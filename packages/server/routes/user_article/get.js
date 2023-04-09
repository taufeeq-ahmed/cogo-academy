const getReadArticleFromDB = require("../../controllers/user_article/get");


const getReadArticle = async (fastify) => {
    fastify.get("/user_article/:article_id", async (req, res) => {
        const readArticle = await getReadArticleFromDB(req.params, req);
        res.status(200).send(readArticle);
    });
};

module.exports = getReadArticle;

