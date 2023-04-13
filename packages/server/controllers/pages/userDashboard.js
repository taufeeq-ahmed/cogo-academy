

const getAllCoursesByBatchFromDB = require("../course/getAllCoursesByBatch");
const getRecentSectionsFromDB = require("../section/getRecentSections");
const getLeaderBoardByBatchFromDB = require("../user/leaderboard");

const getUserDashboardFromDB = async (params, req) => {
    const allCourses = await getAllCoursesByBatchFromDB(req)
    const userData = req.user
    params.rank_lte = 3
    const topThreeUsers = await getLeaderBoardByBatchFromDB(params)
    const recentSections = await getRecentSectionsFromDB(req);

    return { allCourses, userData, topThreeUsers, recentSections };
};
module.exports = getUserDashboardFromDB;
