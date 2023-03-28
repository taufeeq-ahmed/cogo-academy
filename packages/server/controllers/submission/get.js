const { prisma } = require("../../helpers/db-client");

const getSubmissionFromDB = async (params) => {
    const { submission_id } = params;

    const submission = await prisma.Submission.findUnique({
        where: {
            submission_id: submission_id
        }
    })
    return submission;
};
module.exports = getSubmissionFromDB;


