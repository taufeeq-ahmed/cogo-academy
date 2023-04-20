const getAllExercisesFromDB = require("../../controllers/exercise/list");


const getAllExerciesBySection = async (fastify) => {
    fastify.get("/exercise/:section_id/list", async (req, res) => {
        try {
            const exercises = await getAllExercisesFromDB(req.params);
            res.status(200).send(exercises);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = getAllExerciesBySection;