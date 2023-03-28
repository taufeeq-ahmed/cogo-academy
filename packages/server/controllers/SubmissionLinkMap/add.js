const { prisma } = require("../../helpers/db-client");

const addSubmissionLinkMapToDB = async (data) => {
    const { user_id, submission_id, submission_url } = data;

    const newMap = await prisma.submissionLinkMap.create({
        data: {
            user_id: user_id,
            submission_id: submission_id,
            submission_url: submission_url
        }
    })
    return newMap;
};
module.exports = addSubmissionLinkMapToDB;

