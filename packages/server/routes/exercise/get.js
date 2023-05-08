const getExerciseFromDB = require("../../controllers/exercise/get");

const getExercise = async (fastify) => {
    fastify.get("/exercise/:exercise_id", async (req, res) => {
        try {
            const exercise = await getExerciseFromDB(req.params);
            res.status(200).send(exercise);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = getExercise;