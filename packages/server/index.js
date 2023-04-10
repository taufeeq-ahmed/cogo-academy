require('./helpers/load-env');
const Fastify = require('fastify');
const qs = require('qs');
const cors = require('@fastify/cors')

const { prisma } = require("./helpers/db-client");
const registerRoutes = require("./routes");

const plugins = require('./plugins');

const start = async () => {
    const fastify = Fastify({
        logger: true,
        querystringParser: (str) => qs.parse(str),
    });

    // fastify.register(require('./plugins/auth-plugin'))

    // cors
    fastify.register(cors, {
        origin: 'http://127.0.0.1:3000',
        methods: ["GET", "POST", "PATCH", "DELETE"],
        // allowedHeaders: ["Content-Type", "Authorization", "Accept"],
        credentials: true
    });

    // jwt
    fastify.register(require('@fastify/jwt'), {
        secret: 'supersecret'
    })

    // connect to database
    await prisma.$connect();
    fastify.log.info("Connected to Prisma");

    //register all plugins
    await fastify.register(plugins);

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
