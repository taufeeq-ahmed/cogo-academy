const getLandingPageDataFromDB = require("../../controllers/pages/landing")

const getLandingPageData = async (fastify) => {
    fastify.get("/landing/:course_id", async (req, res) => {
        const landingPageData = await getLandingPageDataFromDB(req);
        res.status(200).send(landingPageData);
    })
}
module.exports = getLandingPageData