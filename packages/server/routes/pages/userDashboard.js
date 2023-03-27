const getUserDashboardFromDB = require("../../controllers/pages/userDashboard");

const getUserDashboard = async (fastify) => {
    fastify.get("/user-dashboard/:user_id", async (req, res) => {
        const dashboardData = await getUserDashboardFromDB(req.params);
        res.status(200).send(dashboardData);
    });
};
module.exports = getUserDashboard;