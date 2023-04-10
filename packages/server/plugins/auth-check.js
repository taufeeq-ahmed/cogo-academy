const { ForbiddenError } = require('../helpers/error-helper');

const PUBLIC_ROUTES = [
    '/',
    '/course/list'
];

const authCheckPlugin = async (fastify) => {
    await fastify.addHook('preHandler', async (request, reply) => {
        const { routerPath } = request;
        if (PUBLIC_ROUTES.includes(routerPath)) {
            return;
        }
        try {
            const decoded = await request.jwtVerify(); // Verify and decode the JWT token
            request.user = decoded; // Add the decoded payload to the request object
        } catch (err) {
            throw new ForbiddenError('No permission to access this route'); // Throw an error if the token is invalid or missing
        }
    });
    fastify.log.info('Loaded plugin auth-check');
};

authCheckPlugin[Symbol.for('skip-override')] = true;
module.exports = authCheckPlugin;
