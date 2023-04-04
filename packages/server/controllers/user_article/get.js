const { prisma } = require("../../helpers/db-client");

const getReadArticleFromDB = async (params) => {
    const { user_id, article_id } = params;
    const readArticle = await prisma.user_Article.findUnique({
        where: {
            user_id_article_id: {
                user_id: user_id,
                article_id: article_id
            }
        },
    })
    return readArticle;
};
module.exports = getReadArticleFromDB;
