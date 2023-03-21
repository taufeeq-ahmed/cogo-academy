const { userRoutes } = require("../controllers/user");

const registerRoutes = async (fastify) => {
    await userRoutes(fastify);
}

module.exports = registerRoutes;
