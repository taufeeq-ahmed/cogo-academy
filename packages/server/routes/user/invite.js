const inviteUser = require("../../controllers/user/invite");
const userInvitation = async (fastify) => {
	fastify.post('/invite_user', async (request, reply) => {
		const { params, body } = request;
		
		const user = await inviteUser(params, body);

		const result = { user };
		return reply.status(200).send(result);
	});
};
module.exports = userInvitation;