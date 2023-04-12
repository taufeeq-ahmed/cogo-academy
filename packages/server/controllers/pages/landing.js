const getAllCoursesFromDB = require("../course/list");
const getSectionsFromDB = require("../section/getSections");

const getLandingPageDataFromDB = async (req) => {

    req.params.user_id = req.user.user_id

    const { params } = req

    const allCourses = await getAllCoursesFromDB();
    const sections = await getSectionsFromDB(params)

    return { allCourses, sections, userData: req.user }

}

module.exports = getLandingPageDataFromDB

