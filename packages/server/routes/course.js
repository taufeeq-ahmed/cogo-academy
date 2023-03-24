const { addCoursetoDB, getCourseFromDB, UpdateCourseFromDB, DeleteCourseFromDB, addCourseAndSectionsToDB, getCourseAndSectionsFromDB } = require("../controllers/course");
const { prisma } = require("../helpers/db-client");
const addCourseAndSections = async (fastify) => {
    fastify.post("/courses/add-courses-and-sections", async (req, res) => {
        try {
            const courseAndSections = await addCourseAndSectionsToDB(req.body);
            req.status(200).send(courseAndSections);
        } catch (err) {
            console.log(err);
        }
    });
}
const addCourse = async (fastify) => {
    fastify.post("/courses/add-course", async (req, res) => {
        try {
            const newUser = await addCoursetoDB(req.body);
            res.send(newUser);
        } catch (err) {
            console.log(err);
        }
    });
}
const getCourse = async (fastify) => {
    fastify.post("/courses/get-course", async (req, res) => {
        try {
            const newUser = await getCourseFromDB(req.body);
            res.send(newUser);
        } catch (err) {
            console.log(err);
        }
    });
}
const getCourseAndSections = async (fastify) => {
    fastify.post("/courses/get-course-and-sections", async (req, res) => {
        try {
            const courseAndSections = await getCourseAndSectionsFromDB(req.body);
            res.status(200).send(courseAndSections);
        } catch (err) {
            console.log(err);
        }
    })
}
const updateCourse = async (fastify) => {
    fastify.post("/courses/update-course", async (req, res) => {
        try {
            const newUser = await UpdateCourseFromDB(req.body);
            res.send(newUser);
        } catch (err) {
            console.log(err);
        }
    });
}
const deleteCourse = async (fastify) => {
    fastify.post("/courses/delete-course", async (req, res) => {
        try {
            const newUser = await DeleteCourseFromDB(req.body);
            res.send(newUser);
        } catch (err) {
            console.log(err);
        }
    });
}
module.exports = { addCourse, getCourse, updateCourse, deleteCourse, addCourseAndSections, getCourseAndSections }
