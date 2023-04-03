const getAdminStudentsPageDataFromDB = require("../../controllers/pages/adminStudents");

const getAdminStudentsPageData = async (fastify) => {
    fastify.get('/admin/students', async (req, res) => {
        const adminStudentsPageData = await getAdminStudentsPageDataFromDB(req.query)
        res.status(200).send(adminStudentsPageData)
    })
}
module.exports = getAdminStudentsPageData;