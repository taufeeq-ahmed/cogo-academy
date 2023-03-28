const { prisma } = require("../../helpers/db-client");

const updateSubmissionInDB = async (params, data) => {
    const { submission_id } = params;
    const { new_data } = data;
    console.log(params);
    console.log(data);
    const updatedSubmission = await prisma.Submission.update({
        where: {
            submission_id: submission_id
        },
        data: new_data
    })
    return updatedSubmission;
};
module.exports = updateSubmissionInDB;

