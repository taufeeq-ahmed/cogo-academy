const { prisma } = require("../../helpers/db-client");
const getExerciseFromDB = async (params) => {
    const { exercise_id } = params;
    const exercise = await prisma.exercise.findUnique({
        where: {
            exercise_id: exercise_id
        },
        include: {
            test_cases: true
        }
    })
    return exercise;
};
module.exports = getExerciseFromDB;

