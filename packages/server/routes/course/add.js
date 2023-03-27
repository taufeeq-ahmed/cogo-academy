const addCoursetoDB = require("../../controllers/course/add");

const addCourse = async (fastify) => {
    fastify.post("/course/add", async (req, res) => {
        try {
            const newCourse = await addCoursetoDB(req.body);
            res.status(200).send(newCourse);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = addCourse;