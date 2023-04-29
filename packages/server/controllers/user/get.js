const { prisma } = require("../../helpers/db-client");

const getUserFromDB = async (params) => {
    const { user_id } = params;
    const user = await prisma.user.findUnique({
        where: {
            user_id: user_id,
        },
        include: {
            batches: true,
            track: true
        }
    })

    const readArticleCount = await prisma.user_Article.aggregate({
        _count: true,
        where: {
            user_id: user_id,
        }
    })

    const exercisesDone = await prisma.user_Exercise.aggregate({
        _count: true,
        where: {
            user_id: user_id,
            done: true
        }
    })

    const submissionsDone = await prisma.user_Submission.aggregate({
        _count: true,
        where: {
            user_id: user_id,
        }
    })

    user.number_of_articles_read = readArticleCount._count
    user.number_of_exercises_done = exercisesDone._count
    user.number_of_submissions_done = submissionsDone._count

    return user;
};
module.exports = getUserFromDB;
