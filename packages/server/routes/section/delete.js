const deleteSectionFromDB = require("../../controllers/section/delete");

const deleteSection = async (fastify) => {
    fastify.delete("/section/:section_id", async (req, res) => {
        try {
            const deletedSection = await deleteSectionFromDB(req.params);
            res.status(200).send(deletedSection);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = deleteSection;
