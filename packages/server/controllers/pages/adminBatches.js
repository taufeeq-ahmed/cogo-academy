const getAllBatchesFromDB = require("../batch/list")

const getAdminBatchesPageDataFromDB = async (params) => {
    const batches = await getAllBatchesFromDB(params)
    return batches

}

module.exports = getAdminBatchesPageDataFromDB