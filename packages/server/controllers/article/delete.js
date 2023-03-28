const { prisma } = require("../../helpers/db-client");

const deleteArticleFromDB = async (params) => {
    const { article_id } = params;
    const deletedArticle = await prisma.Article.delete({
        where: {
            article_id: article_id
        }
    })
    return deletedArticle;
};
module.exports = deleteArticleFromDB;
