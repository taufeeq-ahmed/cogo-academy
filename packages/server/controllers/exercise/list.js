const { prisma } = require("../../helpers/db-client");

const getAllExercisesFromDB = async (params) => {
    const { section_id } = params
    try {
        const allExercises = await prisma.exercise.findMany({
            where: {
                section_id: section_id
            },
            include:{
                user_exercise: true
            }
        });
        return allExercises;
    } catch (err) {
        console.log(err);
    }
};
module.exports = getAllExercisesFromDB;