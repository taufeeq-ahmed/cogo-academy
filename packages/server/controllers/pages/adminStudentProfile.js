const getUserFromDB = require("../user/get")
const getReadArticlesByUserFromDB = require("../user_article/getArticlesByUser")
const getSubmissionsByUserFromDB = require("../user_submission/getSubmissionsByUser")


const getStudentProfilePageDataFromDB = async (params) => {
    const studentData = await getUserFromDB(params)
    const readArticles = await getReadArticlesByUserFromDB(params)
    const submissions = await getSubmissionsByUserFromDB(params)

    return { studentData, readArticles, submissions }
}

module.exports = getStudentProfilePageDataFromDB