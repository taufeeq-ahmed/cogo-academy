const deleteSectionFromDB = require("../../controllers/section/delete");
const { prisma } = require("../../helpers/db-client");
const deleteSection = async (fastify) => {
    fastify.delete("/sections/delete-section", async (req, res) => {
        const deletedSection = await deleteSectionFromDB(req.body);
        res.status(200).send(deletedSection);
    });
};
module.exports=deleteSection;