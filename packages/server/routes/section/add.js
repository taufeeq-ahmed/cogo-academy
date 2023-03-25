const addSectionToDB = require("../../controllers/section/add");
const { prisma } = require("../../helpers/db-client");
const addSection = async (fastify) => {
    fastify.post("/:courses_id/section", async (req, res) => {
        const newSection = await addSectionToDB(req.params, req.body);
        res.status(200).send(newSection);
    });
};
module.exports = addSection;