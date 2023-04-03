const getAdminPageDataFromDB = require("../../controllers/pages/admin");

const getAdminPageData = async (fastify) => {
    fastify.get('/admin/:batch_id', async (req, res) => {
        const adminPageData = await getAdminPageDataFromDB(req.params)
        res.status(200).send(adminPageData)
    })
}
module.exports = getAdminPageData;