
const getRecentCoursesFromDB = require("../course/getRecentCourses");
const getAllCoursesFromDB = require("../course/list");
const getUserFromDB = require("../user/get");
const getLeaderBoardByBatchFromDB = require("../user/leaderboard");

const getUserDashboardFromDB = async (params, req) => {
    params.rank_lte = 3
    const allCourses = await getAllCoursesFromDB(params)
    const userData = req.user
    const topThreeUsers = await getLeaderBoardByBatchFromDB(params)
    const recentCourses = await getRecentCoursesFromDB(params);

    return { allCourses, userData, topThreeUsers, recentCourses };
};
module.exports = getUserDashboardFromDB;
