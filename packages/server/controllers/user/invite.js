const AWS = require('aws-sdk');
const uid = require('uid-safe');
var jwt = require('jsonwebtoken');
const { prisma } = require("../../helpers/db-client");

AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID_SES,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_SES,
	region: 'ap-south-1',
});
const inviteUser = async (params = {}, body = {}) => {
	const { email, batches } = body;

	const user = await prisma.User.findFirst({
		where: {
			email: email,
		}
	});

	if (user) {
		return ({ message: 'User with entered email already exists' });
	}

	const payload = {
		email: email,
		batches: batches
	}
	const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
	const invitationrequest = await prisma.userInvites.create({
		data: {
			token: token,
			email: email
		},
	});

	const ses = new AWS.SES({ apiVersion: '2010-12-01' });

	const mail = {
		Destination: {
			ToAddresses: [email],
		},
		Message: {
			Body: {
				Text: {
					Data: `invited you to join
                    Link ${process.env.CLIENT_URL}/invitation/${token}`,
				},
			},
			Subject: {
				Data: 'Cogo-Academy inviatation',
			},
		},
		Source: 'swapnil.vaidya@cogoport.com',
	};

	const sendEmail = async () => {
		const data = await ses.sendEmail(mail).promise();
		return ({ message: 'Email Sent', data });
	};

	await sendEmail();

	return invitationrequest;
};
module.exports = inviteUser;