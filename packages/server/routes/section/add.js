const addSectionToDB = require("../../controllers/section/add");
const { prisma } = require("../../helpers/db-client");
const addSection = async (fastify) => {
    fastify.post("/:course_id/section", async (req, res) => {
        const newSection = await addSectionToDB(req.params.course_id);
        res.status(200).send(newSection);
    });
};
module.exports=addSection;