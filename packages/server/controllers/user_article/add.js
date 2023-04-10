const { prisma } = require("../../helpers/db-client");

const addReadArticleToDB = async (req) => {
    const { user_id } = req.user
    const { article_id } = req.params;

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

