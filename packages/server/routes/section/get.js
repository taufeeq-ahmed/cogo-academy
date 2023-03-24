const getSectionFromDB = require("../../controllers/section/get");
const { prisma } = require("../../helpers/db-client");
const getSection = async (fastify) => {
    fastify.get("/:course_id/section/:section_id", async (req, res) => {
        const { params } = req
        const section = await getSectionFromDB(req.params.course_id, req.params.section_id);
        res.status(200).send(section);
    });
};
module.exports = getSection;