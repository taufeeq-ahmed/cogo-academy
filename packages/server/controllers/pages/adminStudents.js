const getFilteredUsersFromDB = require("../user/filter")

const getAdminStudentsPageDataFromDB = async (query) => {
    const studentsList = await getFilteredUsersFromDB(query)
    return studentsList

}

module.exports = getAdminStudentsPageDataFromDB