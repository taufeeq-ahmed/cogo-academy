const getAllCourseFromDB = require("../../controllers/course/getList");
const { prisma } = require("../../helpers/db-client");
const getAllCourse = async (fastify) => {
    fastify.get("/course", async (req, res) => {
        try {
            const courses = await getAllCourseFromDB(req.params);
            res.send(courses);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports =getAllCourse;