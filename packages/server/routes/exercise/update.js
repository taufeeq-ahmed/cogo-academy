const updateExercisesInDB = require("../../controllers/exercise/update");
const updateExercies = async (fastify) => {
    fastify.patch("/exercise/:exercise_id/update", async (req, res) => {
        try {
            const exercises = await updateExercisesInDB(req.params, req.body);
            res.status(200).send(exercises);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = updateExercies;