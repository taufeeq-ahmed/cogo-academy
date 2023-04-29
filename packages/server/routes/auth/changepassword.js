const changepassword = require("../../controllers/forgot_password/changepassword");
const { prisma } = require("../../helpers/db-client");

const resetPassword = async (fastify) => {
    fastify.post('/reset-password', async (req, res) => {
        
        try {
            const {email,password}=req.body.data;
            const user = await prisma.User.findUnique({
                where: {
                  email: email
                }
              });
              if (!user) {
                reply.send('User not found.');
              } else {
                const res=await changepassword({email,password});
                return res;
              }
        } catch (err) {
            console.log(err);
        }
    

    });
}

module.exports = resetPassword