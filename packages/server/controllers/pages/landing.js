const getAllCoursesByBatchFromDB = require("../course/getAllCoursesByBatch");
const getSectionsFromDB = require("../section/getSections");
const getUserFromDB = require("../user/get");

const getLandingPageDataFromDB = async (req) => {

    req.params.user_id = req.user.user_id

    const { params } = req

    const allCourses = await getAllCoursesByBatchFromDB(req);
    const sections = await getSectionsFromDB(params)
    const userData = await getUserFromDB(params)

    return { allCourses, sections, userData }

}

module.exports = getLandingPageDataFromDB

