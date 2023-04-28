const getUserFromDB = require("../user/get")
const getCoursesDoneFromDB = require("../user/getCoursesDone")
const getReadArticlesByUserFromDB = require("../user_article/getArticlesByUser")
const getExercisesByUserFromDB = require("../user_exercise/getExercisesByUser")
const getSubmissionsByUserFromDB = require("../user_submission/getSubmissionsByUser")
const getAllBatchesWithoutDetailsFromDB = require("../batch/listWithoutDetails")
const { prisma } = require("../../helpers/db-client")


const getStudentProfilePageDataFromDB = async (params) => {
    const studentData = await getUserFromDB(params)
    const artCount = await prisma.article.aggregate({
        _count: true,
        where: {
            section: {
                course: {
                    batches: {
                        some: { batch_id: { in: studentData.batches.map((b) => b.batch_id) } }
                    }
                }
            }
        },
    })
    const exerCount = await prisma.exercise.aggregate({
        _count: true,
        where: {
            section: {
                course: {
                    batches: {
                        some: { batch_id: { in: studentData.batches.map((b) => b.batch_id) } }
                    }
                }
            }
        },
    })
    // const submCount = await prisma.submission.aggregate({
    //     _count: true,
    //     where: {
    //         section: {
    //             course: {
    //                 batches: {
    //                     some: { batch_id: { in: studentData.batches.map((b) => b.batch_id) } }
    //                 }
    //             }
    //         }
    //     },
    // })
    studentData.number_of_articles = artCount._count
    studentData.number_of_exercises = exerCount._count
    // studentData.number_of_submissions = submCount._count
    const readArticles = await getReadArticlesByUserFromDB(params)
    const submissions = await getSubmissionsByUserFromDB(params)
    const exercises = await getExercisesByUserFromDB(params)
    const coursesDone = await getCoursesDoneFromDB(params)
    const allBatches = await getAllBatchesWithoutDetailsFromDB(params)

    return { allBatches, studentData, readArticles, exercises, submissions, coursesDone }
}

module.exports = getStudentProfilePageDataFromDB