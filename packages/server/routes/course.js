const { addCoursetoDB, getCourseFromDB, UpdateCourseFromDB, DeleteCourseFromDB } = require("../controllers/course");
const { prisma } = require("../helpers/db-client");
//const bcrypt = require("bcrypt");
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
module.exports = { addCourse, getCourse, updateCourse, deleteCourse }