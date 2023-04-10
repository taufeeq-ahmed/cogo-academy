const updateUserInDB = require("../../controllers/user/update");
const addReadArticleToDB = require("../../controllers/user_article/add");
const { prisma } = require("../../helpers/db-client");


const addReadArticle = async (fastify) => {
    fastify.post("/user_article/:article_id/add", async (req, res) => {
        const newReadArticle = await addReadArticleToDB(req);
        req.params.user_id = req.user.user_id
        const readArticleCount = await prisma.user_Article.aggregate(
            {
                _count: true,
                where: {
                    user_id: req.user.user_id
                }
            }
        )
        console.log("rerhwwlnfkwlf", readArticleCount)
        await updateUserInDB(req.params, { new_data: { number_of_articles_read: readArticleCount._count } })
        res.status(200).send(newReadArticle);
    });
};


module.exports = addReadArticle;