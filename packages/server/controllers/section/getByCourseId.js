const { prisma } = require("../../helpers/db-client");

const getSectionByCourseIdFromDB = async (params) => {
    const { course_id } = params;
    const sections = await prisma.section.findMany({
        where: {
            course_id: course_id,
        },
        include: {
            course: {
                select: {
                    image_url: true,
                }
            },
            articles: {
                orderBy: {
                    created_on: 'asc'
                },
            },
            submissions: {
                select: {
                    submission_id: true
                },
                orderBy: {
                    created_on: 'asc'
                },
            },
            exercises: {
                select: {
                    exercise_id: true
                },
                orderBy: {
                    created_on: 'asc'
                }
            }
        },
        orderBy: {
            created_on: 'asc'
        }
    })
    return sections;
};
module.exports = getSectionByCourseIdFromDB;