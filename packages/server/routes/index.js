const signInUser = require("./auth/signIn");
const signUpUser = require("./auth/signUp");
const addCourse = require("./course/add");
const addCourseAndSections = require("./course/addCourseAndSections");
const deleteCourse = require("./course/delete");
const getCourse = require("./course/get");
const updateCourse = require("./course/update");
const addSection = require("./section/add");
const deleteSection = require("./section/delete");
const getSection = require("./section/get");
const updateSection = require("./section/update");


const registerRoutes = async (fastify) => {
    const userRoutes = async (fastify) => {
        await signInUser(fastify);
        await signUpUser(fastify);
    }
    await userRoutes(fastify);
    const sectionRoutes = async (fastify) => {
        await addSection(fastify);
        await getSection(fastify);
        await updateSection(fastify);
        await deleteSection(fastify);
    }
    await sectionRoutes(fastify);
    const courseRoutes = async (fastify) => {
        await addCourse(fastify);
        await addCourseAndSections(fastify);
        await getCourse(fastify);
        await updateCourse(fastify);
        await deleteCourse(fastify);
    }
    await courseRoutes(fastify);
}

module.exports = registerRoutes;
