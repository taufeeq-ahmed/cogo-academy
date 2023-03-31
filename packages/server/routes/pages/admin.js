const getAdminPageDataFromDB = require("../../controllers/pages/admin");

const getAdminPageData = async (fastify) => {
    fastify.get('/admin/', async (req, res) => {
        const adminPageData = await getAdminPageDataFromDB(req.body)
        res.status(200).send(adminPageData)
    })
}
module.exports = getAdminPageData;