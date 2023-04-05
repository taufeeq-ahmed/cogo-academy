const { prisma } = require("../../helpers/db-client");

const getAllTracksFromDB = async () => {
    try {
        const allTracks = await prisma.Track.findMany();
        return allTracks;
    } catch (err) {
        console.log(err);
    }
};
module.exports = getAllTracksFromDB;