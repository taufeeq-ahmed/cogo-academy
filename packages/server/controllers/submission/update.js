const { prisma } = require("../../helpers/db-client");

const updateSubmissionInDB = async (params, data) => {
    const { submission_id } = params;
    const updatedSubmission = await prisma.Submission.update({
        where: {
            submission_id: submission_id
        },
        data: data
    })
    return updatedSubmission;
};
module.exports = updateSubmissionInDB;

