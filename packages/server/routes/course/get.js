const getCourseFromDB = require("../../controllers/course/get");

const getCourse = async (fastify) => {
    fastify.get("/course/:course_id", async (req, res) => {
        try {
            const course = await getCourseFromDB(req.params);
            res.status(200).send(course);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = getCourse;