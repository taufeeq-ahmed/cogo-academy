const addReadArticleToDB = require("../../controllers/user_article/add");


const addReadArticle = async (fastify) => {
    fastify.post("/user_article/:article_id/add", async (req, res) => {
        console.log("------------------")
        console.log("article_id", req.params.article_id, "user", req.user.user_id)
        console.log("------------------")
        // const newReadArticle = await addReadArticleToDB(req);
        res.status(200).send("newReadArticle");
    });
};


module.exports = addReadArticle;