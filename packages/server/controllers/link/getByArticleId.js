const { prisma } = require("../../helpers/db-client");

const getLinksByArticleIdFromDB = async (params) => {
    const { article_id } = params;
    const links = await prisma.Link.findMany({
        where: {
            article_id: article_id
        }
    })
    return links;
}

module.exports = getLinksByArticleIdFromDB;
