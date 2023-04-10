const { prisma } = require("../../helpers/db-client");

const updateSectionInDB = async (params, data) => {
    const { section_id } = params;
    const { new_data } = data;
    const updatedSection = await prisma.Section.update({
        where: {
            section_id: section_id
        },
        data: new_data

    })
    return updatedSection;
};
module.exports = updateSectionInDB;