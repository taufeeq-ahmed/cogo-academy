const deleteCourseFromDB = require("../../controllers/course/delete");

const deleteCourse = async (fastify) => {
    fastify.delete("/course/:course_id", async (req, res) => {
        try {
            const deletedCourse = await deleteCourseFromDB(req.params);
            res.status(200).send(deletedCourse);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = deleteCourse;