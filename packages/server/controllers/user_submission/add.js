const { prisma } = require("../../helpers/db-client");
const getSubmissionLinkMapFromDB = require("./get");
const updateSubmissionLinkMapInDB = require("./update");

const addSubmissionLinkMapToDB = async (params, data) => {

    const { submission_id, user_id } = params
    const { submission_url } = data;

    const updatedMap = await prisma.user_Submission.upsert({
        where: {
            user_id_submission_id: {
                user_id: user_id,
                submission_id: submission_id
            }
        },
        create: {
            user_id: user_id,
            submission_id: submission_id,
            submission_url: submission_url
        },
        update: {
            submission_url: submission_url
        }
    })
    return updatedMap;
};
module.exports = addSubmissionLinkMapToDB;

