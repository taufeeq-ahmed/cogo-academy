const getArticleFromDB = require("../article/get");
const getArticlesBySectionIdFromDB = require("../article/getBySectionId");
const getLinksByArticleIdFromDB = require("../link/getByArticleId");
const getSubmissionFromDB = require("../submission/get");
const getSubmissionBySectionIdFromDB = require("../submission/getBySectionId");
const getReadArticleFromDB = require("../user_article/get");

const getPlaygroundDataFromDB = async (req) => {
    console.log("userrrrrrrr", req.user)
    const { params } = req

    const all_articles = await getArticlesBySectionIdFromDB(params);
    const newAllArticles = all_articles.map((article) => {
        const { user_article, ...art } = article
        return {
            ...art,
            done: user_article.find((uA) => uA.user_id === req.user.user_id) ? true : false
        }
    })
    const all_submissions = await getSubmissionBySectionIdFromDB(params);
    if (params.type === 'article') {
        const { element_id } = params;
        params.article_id = element_id;
        params.user_id = req.user.user_id
        const clicked_element = await getArticleFromDB(params);
        const userArticle = await getReadArticleFromDB(params);
        clicked_element.done = userArticle ? true : false
        const links = await getLinksByArticleIdFromDB(clicked_element);
        return { all_articles: newAllArticles, all_submissions, clicked_element, links, user: req.user };
    } else if (params.type === 'submission') {
        const { element_id } = params;
        params.submission_id = element_id;
        const clicked_element = await getSubmissionFromDB(params);
        return { all_articles: newAllArticles, all_submissions, clicked_element, user: req.user };
    }


}
module.exports = getPlaygroundDataFromDB;

