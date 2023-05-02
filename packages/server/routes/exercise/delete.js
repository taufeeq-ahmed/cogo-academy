const deleteExerciseFromDB = require("../../controllers/exercise/delete");

const deleteExercise = async (fastify) => {
    fastify.delete("/exercise/:exercise_id/delete", async (req, res) => {
        try {
            const deletedExercise = await deleteExerciseFromDB(req.params);
            res.status(200).send(deletedExercise);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = deleteExercise;