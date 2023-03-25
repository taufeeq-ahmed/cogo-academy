const updateSectionInDB = require("../../controllers/section/update");
const { prisma } = require("../../helpers/db-client");
const updateSection = async (fastify) => {
    fastify.patch("/sections/:id", async (req, res) => {
        const updatedSection = await updateSectionInDB(req.params,req.body);
        res.status(200).send(updatedSection);
    });
}
module.exports=updateSection;