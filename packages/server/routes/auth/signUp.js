const signUpUserToDB = require("../../controllers/auth/signUp");
const signUpUser = async (fastify) => {
    fastify.post('/users/register', async (req, res) => {
        try {
            const user = await signUpUserToDB(req.body)
            res.status(200).send(user);
        } catch (err) {
            console.log(err);
        }
        return user
    })
}



module.exports = signUpUser;