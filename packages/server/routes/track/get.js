const getTrackFromDB = require("../../controllers/track/get");


const getTrack = async (fastify) => {
    fastify.get("/track/:track_id", async (req, res) => {
        const track = await getTrackFromDB(req.params);
        res.status(200).send(track);
    });
};
module.exports = getTrack;

