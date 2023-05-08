const { prisma } = require("../../helpers/db-client");

const updateTrackFromDB = async (params, data) => {
    const { track_id } = params;
    const { new_data } = data;
    const updatedTrack = await prisma.Track.update({
        where: {
            track_id: track_id
        },
        data: new_data
    })
    return updatedTrack;
};
module.exports = updateTrackFromDB;
