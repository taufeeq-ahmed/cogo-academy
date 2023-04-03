const { prisma } = require("../../helpers/db-client");
const getBatchFromDB = require("../batch/get");
const getLeaderBoardByBatchFromDB = require("../user/leaderboard")

const getAdminPageDataFromDB = async (params) => {

    const batch = await getBatchFromDB(params)
    const leaderBoardByBatchData = await getLeaderBoardByBatchFromDB(params)
    const batchCount = await prisma.batch.count()
    const courseCount = await prisma.batch_Course.count()

    return { batch, leaderBoardByBatchData, batchCount, courseCount }

}

module.exports = getAdminPageDataFromDB