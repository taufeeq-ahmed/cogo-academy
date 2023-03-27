const getAllCourseFromDB = require("../../controllers/course/list");

const getAllCourses = async (fastify) => {
    fastify.get("/course/list", async (req, res) => {
        try {
            const courses = await getAllCourseFromDB();
            res.status(200).send(courses);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports =getAllCourses;