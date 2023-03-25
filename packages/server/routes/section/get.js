const getSectionFromDB = require("../../controllers/section/get");
const { prisma } = require("../../helpers/db-client");
const getSection = async (fastify) => {
    fastify.get("/sections/:coursesId", async (req, res) => {
        const section = await getSectionByCourseIdFromDB(req.params);
        res.status(200).send(section);
    });
}
module.exports = getSection;