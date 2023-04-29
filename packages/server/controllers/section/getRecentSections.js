const { prisma } = require("../../helpers/db-client");
const getUserFromDB = require("../user/get");
const getRecentSectionsFromDB = async (req) => {
    const { user_id } = req.user
    const { batch_id } = req.query
    const user = await getUserFromDB({ user_id })
    const recentUserArticles = await prisma.user_Article.findMany({
        where: {
            user: {
                user_id: user_id,
            },
            article: {
                section: {
                    course: {
                        batches: {
                            some: {
                                batch_id: batch_id
                            }
                        }
                    }
                }
            }
        },
        orderBy: {
            updated_on: 'desc'
        },
        include: {
            article: {
                include: {
                    section: {
                        include: {
                            course: {
                                select: {
                                    image_url: true,
                                }
                            },
                            articles: true,
                        }
                    }
                }
            }
        },
    })


    //get the image from the course table and add it to the sections based on the course that is related to the sections

    const uniqueElem = new Map();
    const filteredRecentSections = recentUserArticles && recentUserArticles?.map((userArticle) => {
        const sectionId = userArticle?.article?.section?.section_id;
        const readArticlesCount = uniqueElem.get(sectionId) || 0;
        uniqueElem.set(sectionId, readArticlesCount + 1);

        const { articles, ...section } = userArticle?.article?.section;
        if (readArticlesCount === 0) {
            return {
                ...section,
                first_article_id: userArticle?.article_id,
                number_of_articles: articles.length,
                image_url: section.course.image_url
            };
        }
        return null
    })?.map((sec) => {
        if (!sec) return null
        return {
            ...sec,
            number_of_articles_read: uniqueElem.get(sec.section_id)
        }
    }).filter(section => section !== null);



    return filteredRecentSections.slice(0, 2);
};
module.exports = getRecentSectionsFromDB;

