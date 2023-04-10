const acceptInvite = require("../../controllers/user/acceptInvite");
const acceptInviteUser = async (fastify) => {
	fastify.post('/accept_invite', async (request, reply) => {
		const { body } = request;
		console.log("---0-0-0-0-0-0-")
		console.log("ijijij", body)
		const user = await acceptInvite({ data: body });
		return reply.status(200).send(user);
	});
};

module.exports = acceptInviteUser;