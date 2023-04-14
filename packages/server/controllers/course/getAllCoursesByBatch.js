const { prisma } = require("../../helpers/db-client");

const getAllCoursesByBatchFromDB = async (req) => {
    const { user_id } = req.user
    const { batch_id } = req.query

    try {
        const allCourses = await prisma.course.findMany({
            where: {
                batches: {
                    some: {
                        batch_id: batch_id
                        // users: {
                        //     some: {
                        //         user_id: user_id,
                        //     }
                        // },
                    }
                },
            },
        });

        return allCourses;
    } catch (err) {
        console.log(err);
    }
};
module.exports = getAllCoursesByBatchFromDB;
