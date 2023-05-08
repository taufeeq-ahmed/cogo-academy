const getUserExerciseFromDB = require("../../controllers/user_exercise/get");

const getUserExercise = async (fastify) => {
    fastify.get("/user_exercise/:user_id/:exercise_id", async (req, res) => {
        const userExercise = await getUserExerciseFromDB(req.params);
        res.status(200).send(userExercise);
    });
};

module.exports = getUserExercise;

