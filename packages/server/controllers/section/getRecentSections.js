const { prisma } = require("../../helpers/db-client");
const getRecentSectionsFromDB = async (params) => {
    const { user_id } = params
    const recentUserArticles = await prisma.user_Article.findMany({
        where: {
            user_id: user_id
        },
        orderBy: {
            updated_on: 'desc'
        },
        include: {
            article: {
                include: {
                    section: {
                        include: {
                            articles: true,
                        }
                    }
                }
            }
        },
    })
    const uniqueElem = new Map();
    const filteredRecentSections = recentUserArticles.map((userArticle) => {
        const sectionId = userArticle.article.section.section_id;
        const readArticlesCount = uniqueElem.get(sectionId) || 0;
        uniqueElem.set(sectionId, readArticlesCount + 1);

        const { articles, ...section } = userArticle.article.section;
        if (readArticlesCount === 0) {
            return {
                ...section,
                first_article_id: userArticle.article_id,
            };
        }
        return null
    }).filter(section => section !== null).map((sec) => {
        return {
            ...sec,
            number_of_articles_read: uniqueElem.get(sec.section_id)
        }
    });



    return filteredRecentSections.slice(0, 2);
};
module.exports = getRecentSectionsFromDB;

