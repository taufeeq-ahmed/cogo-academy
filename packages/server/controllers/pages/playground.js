const getArticleFromDB = require("../article/get");
const getArticlesBySectionIdFromDB = require("../article/getBySectionId");
const getLinksByArticleIdFromDB = require("../link/getByArticleId");

const getPlaygroundDataFromDB = async (params) => {
    console.log(params);
    const all_articles = await getArticlesBySectionIdFromDB(params);
    let clicked_article;
    if (params.article_id === '') {
        clicked_article = all_articles[0];
    } else {
        clicked_article = await getArticleFromDB(params);
    }

    const links = await getLinksByArticleIdFromDB(clicked_article);

    return { all_articles, clicked_article, links };
}
module.exports = getPlaygroundDataFromDB;

