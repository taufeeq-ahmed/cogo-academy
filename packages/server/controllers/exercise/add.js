const { prisma } = require("../../helpers/db-client");

const addExercieToDB = async (params, data) => {
    const { section_id } = params;
    const newExercise = await prisma.exercise.create({
        data: {
            exercise_name: data.exercise_name,
            instruction: data.instruction,
            language: data.language,
            prefilled_code: data.prefilled_code,
            section_id: section_id,
            test_cases: {
                create: [...data.test_cases]
            }
        }
    })
    return newExercise;
};
module.exports = addExercieToDB;