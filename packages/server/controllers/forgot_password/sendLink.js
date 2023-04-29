const { prisma } = require("../../helpers/db-client");
const AWS = require('aws-sdk');
const uid = require('uid-safe');

AWS.config.update({
	accessKeyId     : process.env.AWS_ACCESS_KEY_ID_SES,
	secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY_SES,
	region          : 'ap-south-1',
});

const sendLink=async(params)=>{

    const token = await uid(18);
    const email=params;

    await prisma.UserAuth.create({
        data :{
            email:email,
            token:token
        }
    });

    
    const ses = new AWS.SES({ apiVersion: '2010-12-01' });
    const mail = {
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Text: {
            Data: `Password Reset Link ${process.env.CLIENT_URL}/forgotpassword/${token}`,
          },
        },
        Subject: {
          Data: 'Password Reset Request',
        },
      },
      Source: process.env.AWS_SES_DOMAIN,
    };

    const sendEmail = async () => {
      const data = await ses.sendEmail(mail).promise();
      return ({ message: 'Email Sent', data });
    };
  
    await sendEmail();
  
}
module.exports=sendLink;