const addSectionToDB = require("../../controllers/section/add");

const addSection = async (fastify) => {
    fastify.post("/section/:course_id/add", async (req, res) => {
        const newSection = await addSectionToDB(req.params, req.body);
        res.status(200).send(newSection);
    });
};
module.exports = addSection;

