
const getRecentCoursesFromDB = require("../course/getRecentCourses");
const getUserFromDB = require("../user/get");
const getLeaderBoardByBatchFromDB = require("../user/leaderboard");

const getUserDashboardFromDB = async (params, data) => {
    params.rank_lte = 3
    const userData = await getUserFromDB(params);
    const topThreeUsers = await getLeaderBoardByBatchFromDB(params)
    const recentCourses = await getRecentCoursesFromDB(params);

    return { userData, topThreeUsers, recentCourses };
};
module.exports = getUserDashboardFromDB;
