const { prisma } = require('../helpers/db-client');
const { ForbiddenError } = require('../helpers/error-helper');

const PUBLIC_ROUTES = [
    '/users/login',
    '/users/register',
    '/invite_user',
    '/invited_user/:token',
    '/accept_invite',
    '/user/add'
];

const authCheckPlugin = async (fastify) => {
    await fastify.addHook('preHandler', async (request, reply) => {
        const { routerPath } = request;

        if (PUBLIC_ROUTES.includes(routerPath)) {
            return;
        }
        try {
            const decoded = await request.jwtVerify();
            const user = await prisma.user.findFirstOrThrow({
                where: {
                    email: decoded.email
                },
                include: {
                    track: true,
                    batch: true
                }
            })
            request.user = user;
        } catch (err) {
            throw new ForbiddenError('No permission to access this route');
        }

        if (routerPath.startsWith('/admin')) {
            try {
                if (request.user.isAdmin) {
                    return
                }
                else {
                    throw 'Need to be an admin to access this route'
                }
            }
            catch (err) {
                throw new ForbiddenError(err);
            }
        }
    });
    fastify.log.info('Loaded plugin auth-check');
};

authCheckPlugin[Symbol.for('skip-override')] = true;
module.exports = authCheckPlugin;
