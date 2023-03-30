const { prisma } = require("../../helpers/db-client");
const getSubmissionLinkMapFromDB = require("./get");
const updateSubmissionLinkMapInDB = require("./update");

const addSubmissionLinkMapToDB = async (data) => {

    const { user_id, submission_id, submission_url } = data;
    const isThereMap = await getSubmissionLinkMapFromDB({ user_id, submission_id });
    if (isThereMap.length != 0) {
        console.log(isThereMap);
        console.log("In Update Part")
        const updatedMap = await updateSubmissionLinkMapInDB({ user_id, submission_id }, { submission_url })
        return updatedMap
    } else {
        console.log(isThereMap);
        console.log("In create Part")
        const newMap = await prisma.submissionLinkMap.create({
            data: {
                user_id: user_id,
                submission_id: submission_id,
                submission_url: submission_url
            }
        })
        return newMap;
    }


};
module.exports = addSubmissionLinkMapToDB;

