const { prisma } = require("../../helpers/db-client");

const getTrackFromDB = async (params) => {
    const { track_id } = params;
    const track = await prisma.Track.findUnique({
        where: {
            track_id: track_id
        },
    })
    return track;
};
module.exports = getTrackFromDB;