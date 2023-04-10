const { prisma } = require("../../helpers/db-client");
const getArticlesBySectionIdFromDB = async (params) => {
    const { section_id } = params;

    // console.log("section id", section_id)

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
    })



    return articles;

}
module.exports = getArticlesBySectionIdFromDB;