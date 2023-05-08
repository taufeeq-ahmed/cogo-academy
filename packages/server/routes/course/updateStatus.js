const updateStatusCourseInDB = require("../../controllers/course/updateStatus");

const updateStatusCourse = async (fastify) => {
    fastify.patch("/course_status/:course_id", async (req, res) => {
        try {
            const updatedCourse = await updateStatusCourseInDB(req.params, req.body);
            res.status(200).send(updatedCourse);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = updateStatusCourse;