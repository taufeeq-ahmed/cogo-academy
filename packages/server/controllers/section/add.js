const { prisma } = require("../../helpers/db-client");

const addSectionToDB = async (params, data) => {
    const { course_id } = params;
    const { section_name, description } = data;
    const newSection = await prisma.Section.create({
        data: {
            course_id: course_id,
            section_name: section_name,
            description: description
        }
    })
    return newSection;
};
module.exports = addSectionToDB;
