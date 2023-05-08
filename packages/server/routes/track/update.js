const updateTrackFromDB = require("../../controllers/track/update");


const updateTrack = async (fastify) => {
    fastify.patch("/track/:track_id", async (req, res) => {
        const updatedTrack = await updateTrackFromDB(req.params, req.body);
        res.status(200).send(updatedTrack);
    });
}
module.exports = updateTrack;
