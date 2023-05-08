const { prisma } = require("../../helpers/db-client");

const updateArticleInDB = async (params, data) => {
    const { article_id } = params;
    // const { new_data } = data;
    const {article_name, article_time_in_mins, article_content, Links}=data
    const article = await prisma.Article.findUnique({ where: { article_id } });
    const test= article.Links?.map((item)=>{
        item.link_id;
    })
    const newLinks = Links
        .filter((lnk) => lnk.link_id === undefined);
    const existingLinks=Links.filter((tc)=>test?.includes(tc.link_id));
    const updatedArticle = await prisma.Article.update({
        where: {
            article_id: article_id
        },
        data: {
            article_name:article_name,
            article_content:article_content,
            article_time_in_mins:article_time_in_mins,
            Links:{
                create:[...newLinks],
                update:existingLinks,
            }
        }
    })
    return updatedArticle;
};
module.exports = updateArticleInDB;
