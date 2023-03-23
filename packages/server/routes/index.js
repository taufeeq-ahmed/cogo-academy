const signInUser = require("./auth/signIn");
const signUpUser = require("./auth/signUp");


const registerRoutes = async (fastify) => {
    const userRoutes = async (fastify) => {
        await signUpUser(fastify);
        await signInUser(fastify);
    }
    await userRoutes(fastify);
}

module.exports = registerRoutes;
