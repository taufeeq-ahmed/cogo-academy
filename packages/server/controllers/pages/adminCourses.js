const getAllCoursesWithDetailsFromDB = require("../course/listWithDetails")


const getAdminCoursesPageDataFromDB = async (params) => {
    const coursesWithBatches = await getAllCoursesWithDetailsFromDB(params)
    return coursesWithBatches

}

module.exports = getAdminCoursesPageDataFromDB