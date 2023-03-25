const { prisma } = require("../../helpers/db-client");
const addSectionToDB = async (params, data) => {
    const { courses_id } = params;
    const { section_name, description } = data;
    const newSection = await prisma.Sections.create({
        data: {
            // courses_id: courses_id,
            section_name: section_name,
            description: description

        }
    })
    return newSection;
};
module.exports = addSectionToDB;