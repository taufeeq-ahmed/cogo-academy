const getInviteUser = require("../../controllers/user/getInvite");
const getInvite = async (fastify) => {
	fastify.get('/invited_user/:token', async (request, reply) => {
		const { params } = request;

		const user = await getInviteUser({ params });

		const result = user;
		return reply.status(200).send(result);
	});
};

module.exports =getInvite ;