const { prisma } = require("../../helpers/db-client");
const updateSectionInDB = async ({ name, newData }) => {

    const updatedSection = await prisma.Sections.update({
        where: {
            name: name
        },
        data: newData

    })
    return updatedSection;
};
module.exports=updateSectionInDB;