const { prisma } = require("../../helpers/db-client");

const getSubmissionsByUserFromDB = async (params) => {
    const { user_id } = params
    const submissions = await prisma.user_Submission.findMany({
        where: {
            user_id: user_id,
        },
        include: {
            submission: {
                select: {
                    submission_id: true,
                    submission_name: true,
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
        },
    })
    return submissions;
}

module.exports = getSubmissionsByUserFromDB