const getArticleFromDB = require("../article/get");
const getArticlesBySectionIdFromDB = require("../article/getBySectionId");
const getLinksByArticleIdFromDB = require("../link/getByArticleId");
const getSubmissionFromDB = require("../submission/get");
const getSubmissionBySectionIdFromDB = require("../submission/getBySectionId");

const getPlaygroundDataFromDB = async (params, type) => {

    const all_articles = await getArticlesBySectionIdFromDB(params);
    const all_submissions = await getSubmissionBySectionIdFromDB(params);
    if (type === 'article') {
        const { element_id } = params;
        params.article_id = element_id;
        const clicked_article = await getArticleFromDB(params);
        const links = await getLinksByArticleIdFromDB(clicked_article);
        return { all_articles, all_submissions, clicked_article, links };
    } else if (type === 'submission') {
        const { element_id } = params;
        params.submission_id = element_id;
        const clicked_submission = await getSubmissionFromDB(params);
        return { all_articles, all_submissions, clicked_submission };
    }


}
module.exports = getPlaygroundDataFromDB;

