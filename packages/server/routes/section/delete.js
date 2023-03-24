const deleteSectionFromDB = require("../../controllers/section/delete");
const { prisma } = require("../../helpers/db-client");
const deleteSection = async (fastify) => {
    fastify.delete("/:course_id/section/:section_id", async (req, res) => {
        const deletedSection = await deleteSectionFromDB(req.params.course_id, req.params.section_id);
        res.status(200).send(deletedSection);
    });
};
module.exports=deleteSection;