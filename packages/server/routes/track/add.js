const addTracktoDB = require("../../controllers/track/add");

const addTrack = async (fastify) => {
    fastify.post("/track", async (req, res) => {
        try {
            const newTrack = await addTracktoDB(req.body);
            res.status(200).send(newTrack);
        } catch (err) {
            console.log(err);
        }
    });
};
module.exports = addTrack;