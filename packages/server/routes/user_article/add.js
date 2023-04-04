const addReadArticleToDB = require("../../controllers/user_article/add");


const addReadArticle = async (fastify) => {
    fastify.post("/user_article/:user_id/:article_id/add", async (req, res) => {
        const newReadArticle = await addReadArticleToDB(req.params, req.body);
        res.status(200).send(newReadArticle);
    });
};


module.exports = addReadArticle;