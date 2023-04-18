

const getAllCoursesByBatchFromDB = require("../course/getAllCoursesByBatch");
const getRecentSectionsFromDB = require("../section/getRecentSections");
const getUserFromDB = require("../user/get");
const getLeaderBoardByBatchFromDB = require("../user/leaderboard");

const getUserDashboardFromDB = async (params, req) => {
    const allCourses = await getAllCoursesByBatchFromDB(req)
    params.user_id = req.user.user_id
    // console.log("----------------------------")
    // console.log("iuhiuu", params[user_id])
    params.rank_lte = 3
    const userData = await getUserFromDB(params)
    const topThreeUsers = await getLeaderBoardByBatchFromDB(params)
    const recentSections = await getRecentSectionsFromDB(req);

    return { allCourses, userData, topThreeUsers, recentSections };
};
module.exports = getUserDashboardFromDB;
