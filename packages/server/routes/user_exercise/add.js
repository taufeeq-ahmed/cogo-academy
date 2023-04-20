const addExerciseDoneToDB = require("../../controllers/user_exercise/add");

const addUserExercise = async (fastify) => {
    fastify.post("/user_exercise/:exercise_id/add", async (req, res) => {
        const result = await addExerciseDoneToDB(req);
        res.status(200).send(result);
    });
};


module.exports = addUserExercise;