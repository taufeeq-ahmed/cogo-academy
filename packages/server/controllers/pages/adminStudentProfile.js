const getUserFromDB = require("../user/get")
const getCoursesDoneFromDB = require("../user/getCoursesDone")
const getReadArticlesByUserFromDB = require("../user_article/getArticlesByUser")
const getSubmissionsByUserFromDB = require("../user_submission/getSubmissionsByUser")


const getStudentProfilePageDataFromDB = async (params) => {
    const studentData = await getUserFromDB(params)
    const readArticles = await getReadArticlesByUserFromDB(params)
    const submissions = await getSubmissionsByUserFromDB(params)
    const coursesDone = await getCoursesDoneFromDB(params)

    return { studentData, readArticles, submissions, coursesDone }
}

module.exports = getStudentProfilePageDataFromDB