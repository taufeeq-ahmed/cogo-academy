const addCourseAndSectionsToDB = require("../../controllers/course/addCourseAndSectionsToDB");
const { prisma } = require("../../helpers/db-client");
const addCourseAndSections = async (fastify) => {
    fastify.post("/course/addCourseAndSections", async (req, res) => {
        try {
            const courseAndSections = await addCourseAndSectionsToDB(req.body);
            req.status(200).send(courseAndSections);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports =addCourseAndSections;