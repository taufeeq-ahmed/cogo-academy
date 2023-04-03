const getStudentProfileFromDB = require("../../controllers/pages/adminStudentProfile")

const getStudentProfilePageData = async (params) => {
    const studentProfileData = await getStudentProfileFromDB(params)
    return studentProfileData
}

module.exports = getStudentProfilePageData