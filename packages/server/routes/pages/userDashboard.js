const getUserDashboardFromDB = require("../../controllers/pages/userDashboard");

const getUserDashboardData = async (fastify) => {
    fastify.get("/user-dashboard", async (req, res) => {
        const dashboardData = await getUserDashboardFromDB(req.params, req);
        res.status(200).send(dashboardData);
    });
};
module.exports = getUserDashboardData;