const { prisma } = require("../../helpers/db-client");
const deleteSectionFromDB = async (params) => {
    const { id } = params;
    const deletedSection = await prisma.Sections.delete({
        where: {
            id: id
        },
    })
    return deletedSection;
}
module.exports = deleteSectionFromDB;