const getReadArticlesByUserFromDB = require("../../controllers/user_article/getArticlesByUser");

const getReadArticlesByUser = async (fastify) => {
    fastify.get("/user_article/:user_id", async (req, res) => {
        const readArticle = await getReadArticlesByUserFromDB(req.params);
        res.status(200).send(readArticle);
    });
};

module.exports = getReadArticlesByUser;

