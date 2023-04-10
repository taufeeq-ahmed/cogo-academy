const getSectionByCourseIdFromDB = require('../../controllers/section/getByCourseId')
const getSectionByCourseId = async (fastify) => {
    fastify.get("/:course_id/sections", async (req, res) => {
        const sections = await getSectionByCourseIdFromDB(req.params);
        res.status(200).send(sections);
    })
}

module.exports = getSectionByCourseId;