const { prisma } = require("../../helpers/db-client");
const updateExercisesInDB = async (params, data) => {
    const { exercise_id } = params;
    const { language, exercise_name, instruction, prefilled_code, test_cases } = data;

    const newTestCases = []
    const existingTestCases = []

    test_cases.forEach((tc) => {
        if (tc?.test_case_id) {
            existingTestCases.push(tc)
        }
        else {
            newTestCases.push(tc)
        }
    });

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
                createMany: {
                    data: [...newTestCases]
                },
            }
        }
    })

    existingTestCases.map(async (testCase) => {
        await prisma.testCase.update({
            where: {
                test_case_id: testCase.test_case_id
            },
            data: testCase
        })
    })

    return updateExercise;
}
module.exports = updateExercisesInDB;