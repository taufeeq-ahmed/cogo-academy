const getAllTracksFromDB = require("../../controllers/track/list");


const getAllTracks = async (fastify) => {
    fastify.get("/track/list", async (req, res) => {
        try {
            const tracks = await getAllTracksFromDB();
            res.status(200).send(tracks);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = getAllTracks;