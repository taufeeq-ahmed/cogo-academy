const addArticleToDB = require("../../controllers/article/add");
const updatedSection = require("../../controllers/section/update")
const getArticlesBySectionIdFromDB = require("../../controllers/article/getBySectionId")

const addArticle = async (fastify) => {
    fastify.post("/article/:section_id/add", async (req, res) => {
        const newArticle = await addArticleToDB(req.params, req.body);
        // const articleCount = await getArticlesBySectionIdFromDB(req.params)
        // await updatedSection(req.params, { "new_data": { number_of_articles: articleCount.length } })
        res.status(200).send(newArticle);
    });
};
module.exports = addArticle;

