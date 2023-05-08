const { prisma } = require("../../helpers/db-client");

const getReadArticlesByUserFromDB = async (params) => {
    const { user_id } = params
    const readArticles = await prisma.user_Article.findMany({
        where: {
            user_id: user_id,
        },
        include: {
            article: {
                select: {
                    article_id: true,
                    article_name: true,
                    section: {
                        select: {
                            section_id: true,
                            section_name: true,
                            course: {
                                select: {
                                    course_id: true,
                                    course_name: true
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    return readArticles;
}

module.exports = getReadArticlesByUserFromDB