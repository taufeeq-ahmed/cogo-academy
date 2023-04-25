const { prisma } = require("../../helpers/db-client");
const updateExercisesInDB = async (params, data) => {
    const { exercise_id } = params;
    console.log("----------------------------------------------------")
    console.log(data);
    const { language, exercise_name, instruction, prefilled_code, test_cases } = data;
    const updateExercise = await prisma.exercise.update({
        where: {
            exercise_id: exercise_id,
        },
        data: {
            language: language,
            instruction: instruction,
            prefilled_code: prefilled_code,
            exercise_name: exercise_name,
            test_cases: {
                create: [...test_cases]
            }
        }
    })
    return updateExercise;
}
module.exports = updateExercisesInDB;