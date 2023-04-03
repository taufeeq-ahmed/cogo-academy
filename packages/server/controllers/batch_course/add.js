const { prisma } = require("../../helpers/db-client");

const addCourseToBatchDB = async (data) => {
    const { batch_id, courses } = data;

    const newMap = await prisma.batch_Course.createMany({
        data: courses.map(
            (course) => {
                return {
                    batch_id: batch_id,
                    course_id: course.course_id,
                };
            }
        )
    })
    return newMap;
};
module.exports = addCourseToBatchDB;