const updateCourseFromDB = require("../../controllers/course/update");
const { prisma } = require("../../helpers/db-client");
const updateCourse = async (fastify) => {
    fastify.patch("/course/:course_id", async (req, res) => {
        try {
            const updateCours = await updateCourseFromDB(req.params.course_id);
            res.send(updateCours);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports =updateCourse;