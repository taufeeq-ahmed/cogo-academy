const { prisma } = require("../../helpers/db-client");
const getAllBatchesFromDB = require("../batch/list");
const getAllTracksFromDB = require("../track/list");
const getLeaderBoardByBatchFromDB = require("../user/leaderboard")

const getAdminPageDataFromDB = async (req) => {

    req.params.rank_lte = 5;

    const batches = await getAllBatchesFromDB(req.params)
    const tracks = await getAllTracksFromDB(req.params)
    // req.params.batch_id = req.user?.batches?.[0]?.batch_id
    const leaderBoardByBatchData = await getLeaderBoardByBatchFromDB(req.params, req.query)
    const studentsCount = await prisma.user.count()
    const batchCount = await prisma.batch.count()
    const courseCount = await prisma.course.count()

    return { user: req.user, batch: batches[0], batches, tracks, leaderBoardByBatchData, studentsCount, batchCount, courseCount }

}

module.exports = getAdminPageDataFromDB