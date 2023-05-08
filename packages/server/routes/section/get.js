const getSectionFromDB = require("../../controllers/section/get");

const getSection = async (fastify) => {
    fastify.get("/section/:section_id", async (req, res) => {
        try {
            const section = await getSectionFromDB(req.params);
            res.status(200).send(section);
        } catch (err) {
            console.log(err);
        }
    });
}
module.exports = getSection;
