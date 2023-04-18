const getUserFromDB = require("../user/get")
const getCoursesDoneFromDB = require("../user/getCoursesDone")
const getReadArticlesByUserFromDB = require("../user_article/getArticlesByUser")
const getSubmissionsByUserFromDB = require("../user_submission/getSubmissionsByUser")
const getAllBatchesWithoutDetailsFromDB = require("../batch/listWithoutDetails")


const getStudentProfilePageDataFromDB = async (params) => {
    const studentData = await getUserFromDB(params)
    const readArticles = await getReadArticlesByUserFromDB(params)
    const submissions = await getSubmissionsByUserFromDB(params)
    const coursesDone = await getCoursesDoneFromDB(params)
    const allBatches = await getAllBatchesWithoutDetailsFromDB(params)

    return { allBatches, studentData, readArticles, submissions, coursesDone }
}

module.exports = getStudentProfilePageDataFromDB