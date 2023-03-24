const updateSectionInDB = require("../../controllers/section/update");
const { prisma } = require("../../helpers/db-client");
const updateSection = async (fastify) => {
    fastify.patch("/:course_id/section/:section_id", async (req, res) => {
        const updatedSection = await updateSectionInDB(req.params.course_id, req.params.section_id);
        res.status(200).send(updatedSection);
    });
};
module.exports=updateSection;