const { prisma } = require("../../helpers/db-client");
const bcrypt = require("bcrypt");
const nodemailer=require('nodemailer')
const sendOtp = require("../../controllers/forgot_password/sendOtp");
const forgotPassword = async (fastify) => {
    fastify.post("/forgot-password", async (req, res) => {
        
        try {
            const email=req.body.email;
            const user = await prisma.User.findUnique({
                where: {
                  email: email
                }
              });
              if (!user) {
                reply.send('User not found.');
              } else {
                await sendOtp(email);
                reply.send('OTP sent to email.');
              }
        } catch (err) {
            console.log(err);
        }

    });
}

module.exports = forgotPassword