const getUserFromDB = require("../user/get")


const getStudentProfileFromDB = async (params) => {
    const studentData = getUserFromDB(params)
    
    return studentData
}

module.exports = getStudentProfileFromDB