const addCourseWithSectionsToDB = require("../../controllers/course/addWithSections");

const { prisma } = require("../../helpers/db-client");
const addCourseWithSections = async (fastify) => {
    fastify.post("/course/add-with-sections", async (req, res) => {
        try {
            const courseWithSections = await addCourseWithSectionsToDB(req.body);
            res.status(200).send(courseWithSections);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = addCourseWithSections;
