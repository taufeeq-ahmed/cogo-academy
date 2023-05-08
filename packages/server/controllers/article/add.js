const { prisma } = require("../../helpers/db-client");
const addArticleToDB = async (params, data) => {
    const { section_id } = params;
    // data.section_id = section_id;
    const newArticle = await prisma.Article.create({
        data: {
            article_name: data.article_name,
            article_time_in_mins: data.article_time_in_mins,
            article_content:data.article_content,
            section_id: section_id,
            Links: {
                create: [...data.Links]
            }
        }
    })
    return newArticle;
};
module.exports = addArticleToDB;


