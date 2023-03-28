const { prisma } = require("../../helpers/db-client");

const getSubmissionBySectionIdFromDB = async (params) => {

    const { section_id } = params;
    const submissions = await prisma.Submission.findMany({
        where: {
            section_id: section_id
        }
    })
    return submissions;

};
module.exports = getSubmissionBySectionIdFromDB;


