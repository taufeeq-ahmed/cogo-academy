const { prisma } = require("../../helpers/db-client");

const deleteSubmissionFromDB = async (params) => {
    const { submission_id } = params;

    const deletedSubmission = await prisma.Submission.delete({
        where: {
            submission_id: submission_id
        },
    })
    return deletedSubmission;
};
module.exports = deleteSubmissionFromDB;

