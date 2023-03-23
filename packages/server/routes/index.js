const signInUser = require("./auth/signInUser");
const signUpUser = require("./auth/signUpUser");
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
}

module.exports = registerRoutes;
