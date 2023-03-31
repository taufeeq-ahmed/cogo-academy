const getUserFromDB = require("../user/get")
const getLeaderBoardFromDB = require("../user/leaderboard")

const getAdminPageDataFromDB = async (params) => {

    const leaderBoardData = await getLeaderBoardFromDB(params)
    // const userData = await getUserFromDB(params)

    return {
        leaderBoardData,
        // userData 
    }

}

module.exports = getAdminPageDataFromDB