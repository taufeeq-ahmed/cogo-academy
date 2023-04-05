const { prisma } = require("../../helpers/db-client");

const addReadArticleToDB = async (params, body) => {
    const { user_id, article_id } = params;
    const { code } = body

    const newReadArticle = prisma.user_Article.upsert({
        where: {
            user_id_article_id: {
                user_id: user_id,
                article_id: article_id
            }
        },
        update: {
            code: code
        },
        create: {
            user_id: user_id,
            article_id: article_id,
            score: 45,
            code: code
        }
    })
    return newReadArticle

};
module.exports = addReadArticleToDB;

