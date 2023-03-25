const getCourseFromDB = require("../../controllers/course/get");
const { prisma } = require("../../helpers/db-client");
const getCourse = async (fastify) => {
    fastify.get("/course/:course_id", async (req, res) => {
        try {
            const course = await getCourseFromDB(req.params);
            res.send(course);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports =getCourse;