const { prisma } = require("../../helpers/db-client");

const deleteTrackFromDB = async (params) => {
    const { track_id } = params;
    const deletedTrack = await prisma.Track.delete({
        where: {
            track_id: track_id
        },
    })
    return deletedTrack;
}
module.exports = deleteTrackFromDB;