const getArticleFromDB = require("../article/get");
const getArticlesBySectionIdFromDB = require("../article/getBySectionId");
const getLinksByArticleIdFromDB = require("../link/getByArticleId");
const getSubmissionFromDB = require("../submission/get");
const getSubmissionBySectionIdFromDB = require("../submission/getBySectionId");
const getReadArticleFromDB = require("../user_article/get");

const getPlaygroundDataFromDB = async (req) => {
    const { params } = req

    const all_articles = await getArticlesBySectionIdFromDB(params);
    all_articles.map((article) => {
        article.done = (article.user_article.length === 0) ? false : true
    })
    const all_submissions = await getSubmissionBySectionIdFromDB(params);
    if (params.type === 'article') {
        const { element_id } = params;
        params.article_id = element_id;
        params.user_id = req.user.user_id
        const clicked_element = await getArticleFromDB(params);
        const userArticle = await getReadArticleFromDB(params)
        clicked_element.done = userArticle ? true : false
        const links = await getLinksByArticleIdFromDB(clicked_element);
        return { all_articles, all_submissions, clicked_element, links };
    } else if (params.type === 'submission') {
        const { element_id } = params;
        params.submission_id = element_id;
        const clicked_element = await getSubmissionFromDB(params);
        return { all_articles, all_submissions, clicked_element };
    }


}
module.exports = getPlaygroundDataFromDB;

