const { prisma } = require("../../helpers/db-client");

const getSubmissionBySectionIdFromDB = async (params) => {

    const { section_id } = params;
    const submissions = await prisma.Submission.findMany({
        where: {
            section_id: section_id
        },
        select: {
            submission_id: true,
            submission_name: true,
            submission_description: true,
            user_submission: true
        }
    })
    return submissions;

};
module.exports = getSubmissionBySectionIdFromDB;


