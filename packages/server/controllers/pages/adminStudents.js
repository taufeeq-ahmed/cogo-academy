const getAllBatchesFromDB = require("../batch/list")
const getAllTracksFromDB = require("../track/list")
const getFilteredUsersFromDB = require("../user/filter")

const getAdminStudentsPageDataFromDB = async (query) => {
    const batchList = await getAllBatchesFromDB()
    const trackList = await getAllTracksFromDB()
    const studentsList = await getFilteredUsersFromDB(query)
    return { batchList, trackList, studentsList }

}

module.exports = getAdminStudentsPageDataFromDB