const { prisma } = require("../../helpers/db-client");

const getSubmissionsByUserFromDB = async (params) => {
    const { user_id } = params
    const submissions = await prisma.user_Submission.findMany({
        where: {
            user_id: user_id,
        },
        include: {
            submission: true
        }
    })
    return submissions;
}

module.exports = getSubmissionsByUserFromDB