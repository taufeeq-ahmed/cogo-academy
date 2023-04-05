const { prisma } = require("../../helpers/db-client");
const getBatchFromDB = require("../batch/get");
const getLeaderBoardByBatchFromDB = require("../user/leaderboard")

const getAdminPageDataFromDB = async (params) => {

    params.rank_lte = 5;

    const batch = await getBatchFromDB(params)
    const leaderBoardByBatchData = await getLeaderBoardByBatchFromDB(params)
    const studentsCount = await prisma.user.count({
        where: {
            batch_id: params.batch_id
        }
    })
    const batchCount = await prisma.batch.count()
    const courseCount = await prisma.course.count()

    return { batch, leaderBoardByBatchData, studentsCount, batchCount, courseCount }

}

module.exports = getAdminPageDataFromDB