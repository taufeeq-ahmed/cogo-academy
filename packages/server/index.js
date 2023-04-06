require('./helpers/load-env');
const Fastify = require('fastify');
const qs = require('qs');
const cors = require('@fastify/cors')

const { prisma } = require("./helpers/db-client");
const registerRoutes = require("./routes");

const start = async () => {
    const fastify = Fastify({
        logger: true,
        querystringParser: (str) => qs.parse(str),
    });

    // fastify.register(require('./plugins/auth-plugin'))

    // cors
    fastify.register(cors, {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    });

    // jwt
    fastify.register(require('@fastify/jwt'), {
        secret: 'supersecret'
    })

    fastify.decorate("authenticate", async (request, reply) => {
        try {
            await request.jwtVerify()
        } catch (err) {
            reply.send(err)
        }
    })

    // jwt user verification
    // fastify.addHook("onRequest", async (request, reply) => {
    //     try {
    //         await request.jwtVerify()
    //     } catch (err) {
    //         reply.send(err)
    //     }
    // })

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
