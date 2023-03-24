const addCoursetoDB = require("../../controllers/course/add");
const { prisma } = require("../../helpers/db-client");
const addCourse = async (fastify) => {
    fastify.post("/course", async (req, res) => {
        try {
            const newCourse = await addCoursetoDB(req.body);
            res.send(newCourse);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports =addCourse;