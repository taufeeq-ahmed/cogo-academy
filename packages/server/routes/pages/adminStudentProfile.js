const getStudentProfilePageDataFromDB = require("../../controllers/pages/adminStudentProfile")

const getStudentProfilePageData = async (fastify) => {
    fastify.get('/admin/user/:user_id', async (req, res) => {
        const adminStudentProfilePage = await getStudentProfilePageDataFromDB(req.params)
        res.status(200).send({ user: req.user, studentData: adminStudentProfilePage })
    })
}

module.exports = getStudentProfilePageData