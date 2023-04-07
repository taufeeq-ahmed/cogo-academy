const { prisma } = require("../../helpers/db-client");
const nodemailer=require('nodemailer');
const sendOtp=async(params)=>{
    //const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otp='123456';
    const email=params;
    await prisma.UserAuth.create({
        data :{
            email:email,
            otp:otp
        }
    });
    const transporter=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'shivommahar@gmail.com',
            password:73513589
        }
    })
    const mail={
            from: 'shivommahar@gmail.com',
            to: 'xyz@gmail.com',
            subject: 'OTP for password reset',
            text: `Your OTP for resetting password is ${otp}.`
    }
    transporter.sendMail(mail, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
module.exports=sendOtp;