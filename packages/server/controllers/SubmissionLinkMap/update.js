const { prisma } = require("../../helpers/db-client");

const updateSubmissionLinkMapInDB = async (params, data) => {
    const { user_id, submission_id, } = params;

    const map = await prisma.submissionLinkMap.update({
        where: {
            AND: [
                { user_id: user_id },
                { submission_id: submission_id }
            ]
        },
        data: data
    })
    return map;
};

module.exports = updateSubmissionLinkMapInDB;




