const signInUser = require("./auth/signIn");
const signUpUser = require("./auth/signUp");
const { addCourse, getCourse, updateCourse, deleteCourse, addCourseAndSections, getCourseAndSections } = require("./course");
const { addSection, updateSection, deleteSection, getSection } = require("./section");

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
        await getCourseAndSections(fastify);
        await updateCourse(fastify);
        await deleteCourse(fastify);
    }
    await courseRoutes(fastify);
}

module.exports = registerRoutes;
