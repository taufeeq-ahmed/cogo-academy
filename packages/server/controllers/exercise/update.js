const { prisma } = require("../../helpers/db-client");
const updateExercisesInDB=async(params, data)=>{
    const { exercise_id } = params;
    const updateExercise = await prisma.exercise.update({
        where :{
            exercise_id:exercise_id,
        },
        data:data,
    })
    return updateExercise;
}
module.exports=updateExercisesInDB;