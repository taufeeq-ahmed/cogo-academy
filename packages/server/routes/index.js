const signInUser = require("./auth/signIn");
const signUpUser = require("./auth/signUp");
const addCourse = require("./course/add");
const addCourseWithSections = require("./course/addWithSections");
const deleteCourse = require("./course/delete");
const getCourse = require("./course/get");
const getAllCourses = require("./course/list");
const updateCourse = require("./course/update");
const getUserDashboard = require("./pages/userDashboard");
const addSection = require("./section/add");
const deleteSection = require("./section/delete");
const getSection = require("./section/get");
const updateSection = require("./section/update");
const addUser = require("./user/add");
const deleteUser = require("./user/delete");
const getUser = require("./user/get");
const updateUser = require("./user/update");

const registerRoutes = async (fastify) => {
    const userRoutes = async (fastify) => {
        await addUser(fastify);
        await getUser(fastify);
        await updateUser(fastify);
        await deleteUser(fastify);
        // await signInUser(fastify);
        // await signUpUser(fastify);
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
        await addCourseWithSections(fastify);
        await getCourse(fastify);
        await getAllCourses(fastify);
        await updateCourse(fastify);
        await deleteCourse(fastify);
    }
    await courseRoutes(fastify);

    const pageRoutes = async (fastify) => {
        await getUserDashboard(fastify);
    }
    await pageRoutes(fastify);
}

module.exports = registerRoutes;
