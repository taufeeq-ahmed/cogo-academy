const deleteCourseFromDB = require("../../controllers/course/delete");
const { prisma } = require("../../helpers/db-client");
const deleteCourse = async (fastify) => {
    fastify.delete("/course/:course_id", async (req, res) => {
        try {
            const deleteCourse = await deleteCourseFromDB(req.params.course_id);
            res.send(deleteCourse);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports =deleteCourse;