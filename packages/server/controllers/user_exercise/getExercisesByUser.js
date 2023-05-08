const { prisma } = require("../../helpers/db-client");

const getExercisesByUserFromDB = async (params) => {
    const { user_id } = params
    const exercisesDone = await prisma.user_Exercise.findMany({
        where: {
            user_id: user_id,
        },
        include: {
            exercise: {
                select: {
                    exercise_id: true,
                    exercise_name: true,
                    section: {
                        select: {
                            section_id: true,
                            section_name: true,
                            course: {
                                select: {
                                    course_id: true,
                                    course_name: true
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    return exercisesDone;
}

module.exports = getExercisesByUserFromDB