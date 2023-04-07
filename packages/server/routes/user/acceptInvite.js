const acceptInvite = require("../../controllers/user/acceptInvite");
const acceptInviteUser = async (fastify) => {
	fastify.post('/accept_invite', async (request, reply) => {
		const { body } = request;
		const { user} = await acceptInvite({ data: body });
		const result = { user };
		return reply.status(200).send(result);
	});
};

module.exports = acceptInviteUser;