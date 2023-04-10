const { prisma } = require("../../helpers/db-client");

const getArticleFromDB = async (params) => {
    const { article_id } = params;
    console.log(params);
    const article = await prisma.Article.findUnique({
        where: {
            article_id: article_id
        }
    })
    return article;
};
module.exports = getArticleFromDB;


