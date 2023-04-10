const { prisma } = require("../../helpers/db-client");

const updateArticleInDB = async (params, data) => {
    const { article_id } = params;
    const { new_data } = data;
    const updatedArticle = await prisma.Article.update({
        where: {
            article_id: article_id
        },
        data: new_data
    })
    return updatedArticle;
};
module.exports = updateArticleInDB;
