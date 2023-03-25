const { prisma } = require("../../helpers/db-client");
const updateSectionInDB = async (params, data) => {
    const { id } = params;
    const { newData } = data;
    const updatedSection = await prisma.Sections.update({
        where: {
            id: id
        },
        data: newData

    })
    return updatedSection;
};
module.exports=updateSectionInDB;