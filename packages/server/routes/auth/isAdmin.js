const isAdmin = async (fastify) => {
    fastify.get('/users/isadmin', async (req, res) => {
        try {
            res.status(200).send(req.user.isAdmin);
        } catch (err) {
            console.log(err);
        }
        return user
    })
}



module.exports = isAdmin;