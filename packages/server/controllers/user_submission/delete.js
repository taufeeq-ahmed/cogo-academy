const { prisma } = require("../../helpers/db-client");

const deleteSubmissionLinkMapFromDB = async (params) => {
    const { user_id, submission_id, } = params;

    const map = await prisma.user_Submission.delete({
        where: {
            AND: [
                { user_id: user_id },
                { submission_id: submission_id }
            ]
        }
    })
    return map;
};
module.exports = deleteSubmissionLinkMapFromDB;


