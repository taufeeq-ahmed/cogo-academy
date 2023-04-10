const { prisma } = require("../../helpers/db-client");
const addArticleToDB = async (params, data) => {
    const { section_id } = params;
    data.section_id = section_id;
    const newArticle = await prisma.Article.create({
        data: data
    })
    return newArticle;
};
module.exports = addArticleToDB;


