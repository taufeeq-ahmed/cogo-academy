const getAdminCoursesPageDataFromDB = require("../../controllers/pages/adminCourses");


const getAdminCoursesPageData = async (fastify) => {
    fastify.get('/admin/courses', async (req, res) => {
        const adminCoursesPageData = await getAdminCoursesPageDataFromDB(req.params)
        res.status(200).send(adminCoursesPageData)
    })
}
module.exports = getAdminCoursesPageData;