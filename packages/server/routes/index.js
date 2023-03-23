<<<<<<< HEAD
const signInUser = require("./auth/signIn");
const signUpUser = require("./auth/signUp");
=======
const signInUser = require("./auth/signInUser");
const signUpUser = require("./auth/signUpUser");
>>>>>>> setup-db


const registerRoutes = async (fastify) => {
    const userRoutes = async (fastify) => {
<<<<<<< HEAD
        await signUpUser(fastify);
        await signInUser(fastify);
=======
        await signInUser(fastify);
        await signUpUser(fastify);
>>>>>>> setup-db
    }
    await userRoutes(fastify);
}

module.exports = registerRoutes;
