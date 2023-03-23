require('./helpers/load-env');
const Fastify = require('fastify');
const qs = require('qs');
const cors = require('@fastify/cors')

const { prisma } = require("./helpers/db-client");
const  registerRoutes  = require("./routes");

const start = async () => {
    const fastify = Fastify({
        logger: true,
        querystringParser: (str) => qs.parse(str),
    });

    // cors
    fastify.register(cors, {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    });

    // connect to database
    await prisma.$connect();
    fastify.log.info("Connected to Prisma");

    // register all routes
    await registerRoutes(fastify);

    try {
        await fastify.listen(process.env.PORT || 8080, "0.0.0.0");
    } catch (err) {
        fastify.log.error(err);
        await prisma.$disconnect();
        process.exit(1);
    }
};

start();
