const { prisma } = require("../../helpers/db-client");

const addReadArticleToDB = async (params, body) => {
    const { user_id, article_id } = params;

    const newReadArticle = prisma.user_Article.upsert({
        where: {
            user_id_article_id: {
                user_id: user_id,
                article_id: article_id
            }
        },
        update: {
        },
        create: {
            user_id: user_id,
            article_id: article_id,
            score: 45,
        }
    })
    return newReadArticle

};
module.exports = addReadArticleToDB;

