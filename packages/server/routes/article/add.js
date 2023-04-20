const addArticleToDB = require("../../controllers/article/add");

const addArticle = async (fastify) => {
    fastify.post("/article/:section_id/add", async (req, res) => {
        const newArticle = await addArticleToDB(req.params, req.body);
        res.status(200).send(newArticle);
    });
};
module.exports = addArticle;

