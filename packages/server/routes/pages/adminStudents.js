const getAdminStudentsPageDataFromDB = require("../../controllers/pages/adminStudents");

const getAdminStudentsPageData = async (fastify) => {
    fastify.get('/admin/users', async (req, res) => {
        const adminStudentsPageData = await getAdminStudentsPageDataFromDB(req.query)
        res.status(200).send({ user: req.user, students: adminStudentsPageData })
    })
}
module.exports = getAdminStudentsPageData;