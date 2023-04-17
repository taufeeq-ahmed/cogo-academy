const { prisma } = require("../../helpers/db-client");
const getArticlesBySectionIdFromDB = async (params) => {
    const { section_id } = params;

    const articles = await prisma.Article.findMany({
        where: {
            section_id: section_id
        },
        select: {
            article_id: true,
            article_name: true,
            article_time_in_mins: true,
            user_article: true
        },
        orderBy: {
            created_on: 'asc'
        }
    })



    return articles;

}
module.exports = getArticlesBySectionIdFromDB;