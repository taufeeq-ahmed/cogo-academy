const getSubmissionBySectionIdFromDB = require('../../controllers/submission/getBySectionId');

const getArticlesBySectionId = async (fastify) => {
    fastify.get("/submission/section/:section_id", async (req, res) => {
        const submissions = await getSubmissionBySectionIdFromDB(req.params);
        res.status(200).send(submissions);
    })
}
module.exports = getArticlesBySectionId;
