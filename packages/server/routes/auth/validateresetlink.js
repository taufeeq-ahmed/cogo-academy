const { prisma } = require("../../helpers/db-client");
const validatereset = async (fastify) => {
    fastify.get('/forgot-password/:token', async (req, res) => {
        try {
            const token=req.params.token;
            const user = await prisma.UserAuth.findFirst({
                where: {
                  token: token
                }
              });
            res.status(200).send(user);
        } catch (err) {
            console.log(err);
        }
        return user
    })
}



module.exports = validatereset;