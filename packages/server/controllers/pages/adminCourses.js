const getAllCoursesFromDB = require("../course/list")


const getAdminCoursesPageDataFromDB = async (params) => {
    const coursesWithBatches = await getAllCoursesFromDB(params)
    return coursesWithBatches

}

module.exports = getAdminCoursesPageDataFromDB