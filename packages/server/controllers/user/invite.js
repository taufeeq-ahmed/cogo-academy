const AWS = require('aws-sdk');
const uid = require('uid-safe');
const { prisma } = require("../../helpers/db-client");

AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID_SES,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_SES,
	region: 'ap-south-1',
});
const inviteUser = async ({ params = {} }) => {
	const { email } = params;
	const user = await prisma.User.findUnique({
		where: {
			email: email,
		}
	});

	if (user) {
		return ({ message: 'User with entered email already exists' });
	}

	const token = await uid(18);
	const invitationrequest = await prisma.UserInvites.create({
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