const { prisma } = require("../../helpers/db-client");

const deleteExerciseFromDB = async (params) => {
    const { exercise_id } = params;
    const deletedExercise = await prisma.Exercise.delete({
        where: {
            exercise_id: exercise_id
        }
    })
    return deletedExercise;
};
module.exports = deleteExerciseFromDB;