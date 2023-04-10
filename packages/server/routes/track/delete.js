const deleteTrackFromDB = require("../../controllers/track/delete");


const deleteTrack = async (fastify) => {
    fastify.delete("/track/:track_id", async (req, res) => {
        try {
            const deletedTrack = await deleteTrackFromDB(req.params);
            res.status(200).send(deletedTrack);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = deleteTrack;
