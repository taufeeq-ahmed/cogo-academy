const signInUser = require("./auth/signInUser");
const signUpUser = require("./auth/signUpUser");


const registerRoutes = async (fastify) => {
    const userRoutes = async (fastify) => {
        await signInUser(fastify);
        await signUpUser(fastify);
    }
    await userRoutes(fastify);
}

module.exports = registerRoutes;
