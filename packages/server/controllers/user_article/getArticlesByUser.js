const { prisma } = require("../../helpers/db-client");

const getReadArticlesByUserFromDB = async (params) => {
    const { user_id } = params
    const readArticles = await prisma.user_Article.findMany({
        where: {
            user_id: user_id,
        },
        include: {
            article: true
        }
    })
    return readArticles;
}

module.exports = getReadArticlesByUserFromDB