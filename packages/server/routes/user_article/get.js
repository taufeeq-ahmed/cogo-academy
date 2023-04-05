const getReadArticleFromDB = require("../../controllers/user_article/get");


const getReadArticle = async (fastify) => {
    fastify.get("/user_article/:user_id/:article_id", async (req, res) => {
        const readArticle = await getReadArticleFromDB(req.params);
        res.status(200).send(readArticle);
    });
};

module.exports = getReadArticle;

