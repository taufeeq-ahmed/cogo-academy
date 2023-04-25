const { prisma } = require("../../helpers/db-client");
const updateExercisesInDB = async (params, data) => {
    const { exercise_id } = params;
    const { language, exercise_name, instruction, prefilled_code, test_cases } = data;
    const exercise = await prisma.exercise.findUnique({ where: { exercise_id } });
    const test= exercise.test_cases?.map((item)=>{
        item.test_case_id;
    })
    const newTestCases = test_cases
        .filter((testCase) => testCase.test_case_id === undefined);
    const existingTestCases=test_cases.filter((tc)=>test?.includes(tc.test_case_id));

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
                create: [...newTestCases],
                update:existingTestCases,
            }
        }
    })
    return updateExercise;
}
module.exports = updateExercisesInDB;