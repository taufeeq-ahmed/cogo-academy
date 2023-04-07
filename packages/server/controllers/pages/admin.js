const { prisma } = require("../../helpers/db-client");
const getAllBatchesFromDB = require("../batch/list");
const getAllTracksFromDB = require("../track/list");
const getLeaderBoardByBatchFromDB = require("../user/leaderboard")

const getAdminPageDataFromDB = async (params) => {

    params.rank_lte = 5;

    const batches = await getAllBatchesFromDB(params)
    const tracks = await getAllTracksFromDB(params)
    params.batch_id = batches[0].batch_id
    const leaderBoardByBatchData = await getLeaderBoardByBatchFromDB(params)
    const studentsCount = await prisma.user.count()
    const batchCount = await prisma.batch.count()
    const courseCount = await prisma.course.count()

    return { batch: batches[0], batches, tracks, leaderBoardByBatchData, studentsCount, batchCount, courseCount }

}

module.exports = getAdminPageDataFromDB