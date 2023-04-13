const getAllCoursesByBatchFromDB = require("../course/getAllCoursesByBatch");
const getSectionsFromDB = require("../section/getSections");

const getLandingPageDataFromDB = async (req) => {

    req.params.user_id = req.user.user_id

    const { params } = req

    const allCourses = await getAllCoursesByBatchFromDB(req);
    const sections = await getSectionsFromDB(params)

    return { allCourses, sections, userData: req.user }

}

module.exports = getLandingPageDataFromDB

