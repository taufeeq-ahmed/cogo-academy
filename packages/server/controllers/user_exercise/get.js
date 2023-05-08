const { prisma } = require("../../helpers/db-client");

const getUserExerciseFromDB = async (params) => {
    const { user_id, exercise_id } = params;
    const userExercise = await prisma.user_Exercise.findUnique({
        where: {
            user_id_exercise_id: {
                user_id: user_id,
                exercise_id: exercise_id
            }
        },
    })
    return userExercise;
};
module.exports = getUserExerciseFromDB;
