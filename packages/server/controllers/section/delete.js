const { prisma } = require("../../helpers/db-client");

const deleteSectionFromDB = async (params) => {
    const { section_id } = params;
    const deletedSection = await prisma.Section.delete({
        where: {
            section_id: section_id
        },
    })
    return deletedSection;
}
module.exports = deleteSectionFromDB;