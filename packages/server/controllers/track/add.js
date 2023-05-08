const { prisma } = require("../../helpers/db-client");
const addTracktoDB = async (data) => {
    const { track_name } = data;

    const newTrack = await prisma.Track.create({
        data: {
            track_name
        },
    })
    return newTrack;
};
module.exports = addTracktoDB;
