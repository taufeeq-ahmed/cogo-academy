const getAdminBatchesPageDataFromDB = require("../../controllers/pages/adminBatches");

const getAdminBatchesPageData = async (fastify) => {
    fastify.get('/admin/batches', async (req, res) => {
        const adminBatchesPageData = await getAdminBatchesPageDataFromDB(req.params)
        res.status(200).send({ user: req.user, batches:  adminBatchesPageData })
    })
}
module.exports = getAdminBatchesPageData;