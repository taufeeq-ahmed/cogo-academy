const { prisma } = require("../../helpers/db-client");

const addSubmissionToDB = async (params, data) => {
    const { section_id } = params;
    data.section_id = section_id;
    const newSubmission = await prisma.Submission.create({
        data: data
    })
    return newSubmission;
};
module.exports = addSubmissionToDB;

