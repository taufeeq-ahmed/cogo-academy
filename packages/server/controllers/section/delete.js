const { prisma } = require("../../helpers/db-client");
const deleteSectionFromDB = async (params) => {
    const { name } = params;
    const deletedSection = await prisma.Sections.delete({
        where: {
            name: name
        },
    })
    return deletedSection;
};
module.exports=deleteSectionFromDB;