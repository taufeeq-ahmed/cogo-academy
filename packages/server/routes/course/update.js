const updateCourseInDB = require("../../controllers/course/update");

const updateCourse = async (fastify) => {
    fastify.patch("/course/:course_id", async (req, res) => {
        try {
            const updatedCourse = await updateCourseInDB(req.params, req.body);
            res.send(updatedCourse);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = updateCourse;