const { prisma } = require('../helpers/db-client');
const { ForbiddenError } = require('../helpers/error-helper');

const PUBLIC_ROUTES = [
    '/users/login',
    '/users/register',
    '/invite_user',
    '/invited_user/:token',
    '/accept_invite'
];

const authCheckPlugin = async (fastify) => {
    await fastify.addHook('preHandler', async (request, reply) => {
        const { routerPath } = request;
        console.log(PUBLIC_ROUTES.includes(routerPath), routerPath)
        if (PUBLIC_ROUTES.includes(routerPath)) {
            return;
        }
        try {
            // const decoded = await request.jwtVerify(); // Verify and decode the JWT token
            // console.log("dec", decoded)
            const user = await prisma.user.findFirst({
                where: {
                    email: decoded.email
                },
                include: {
                    track: true,
                    batch: true
                }
            })
            console.log("user", user)
            request.user = user; // Add the decoded payload to the request object
        } catch (err) {
            throw new ForbiddenError('No permission to access this route'); // Throw an error if the token is invalid or missing
        }
    });
    fastify.log.info('Loaded plugin auth-check');
};

authCheckPlugin[Symbol.for('skip-override')] = true;
module.exports = authCheckPlugin;
