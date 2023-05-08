const { prisma } = require("../../helpers/db-client");
const sendLink = require("../../controllers/forgot_password/sendLink");
const forgotPassword = async (fastify) => {
    fastify.post("/forgot-password", async (req, res) => {
        
        try {
            const {email}=req.body.data;
            const user = await prisma.User.findUnique({
                where: {
                  email: email
                }
              });
              if (!user) {
                reply.send('User not found.');
              } else {
                await sendLink(email);
                reply.send('Link sent to email.');
              }
        } catch (err) {
            console.log(err);
        }

    });
}

module.exports = forgotPassword