const { prisma } = require("../../helpers/db-client");

const getSectionFromDB = async (params) => {
    const { section_id } = params;
    const section = await prisma.Section.findUnique({
        where: {
            section_id: section_id
        },
    })
    return section;
};
module.exports = getSectionFromDB;