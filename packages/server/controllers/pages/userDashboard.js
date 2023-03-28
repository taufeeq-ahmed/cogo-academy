
const getAllCoursesFromDB = require("../course/list");
const getUserFromDB = require("../user/get");
const getTopThreeUsersFromDB = require("../user/getTopThree");

const getUserDashboardFromDB = async (params, data) => {
    const userData = await getUserFromDB(params);
    const topThreeUsers = await getTopThreeUsersFromDB();

    const coursesData = await getAllCoursesFromDB();
    return { userData, topThreeUsers, coursesData };
};
module.exports = getUserDashboardFromDB;
