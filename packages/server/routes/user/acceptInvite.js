const acceptInvite = require("../../controllers/user/acceptInvite");
const acceptInviteUser = async (fastify) => {
	fastify.post('/accept_invite', async (request, reply) => {

		const user = await acceptInvite(request.body);
		return reply.status(200).send(user);
	});
};

module.exports = acceptInviteUser;