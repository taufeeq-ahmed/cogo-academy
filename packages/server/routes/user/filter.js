const getFilteredUsersFromDB = require("../../controllers/user/filter");

const getFilteredUsers = async (fastify) => {
    fastify.get("/user/filter", async (req, res) => {
        const user = await getFilteredUsersFromDB(req.query);
        res.status(200).send(user);
    });
};

module.exports = getFilteredUsers;

