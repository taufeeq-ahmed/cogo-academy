const addReadArticleToDB = require("../../controllers/user_article/add");


const addReadArticle = async (fastify) => {
    fastify.post("/user_article/:article_id/add", async (req, res) => {
        req.params.user_id = req.user.user_id
        const newReadArticle = await addReadArticleToDB(req);
        res.status(200).send(newReadArticle);
    });
};


module.exports = addReadArticle;