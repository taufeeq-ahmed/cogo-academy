const { prisma } = require("../../helpers/db-client");

const getArticleFromDB = async (params) => {
    const { article_id } = params;
    const article = await prisma.Article.findUnique({
        where: {
            article_id: article_id
        },
        include:{
            Links:true,
        }
    })
    return article;
};
module.exports = getArticleFromDB;


