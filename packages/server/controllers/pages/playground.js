const getArticleFromDB = require("../article/get");
const getArticlesBySectionIdFromDB = require("../article/getBySectionId");
const getLinksByArticleIdFromDB = require("../link/getByArticleId");

const getPlaygroundDataFromDB = async (params) => {
    console.log("fdsf",params);
    const all_articles = await getArticlesBySectionIdFromDB(params);
    if(params.article_id===""){
        params.article_id = all_articles[0].article_id;
    }
    const clicked_article = await getArticleFromDB(params);

    const links = await getLinksByArticleIdFromDB(clicked_article);

    return { all_articles, clicked_article, links };
}
module.exports = getPlaygroundDataFromDB;

