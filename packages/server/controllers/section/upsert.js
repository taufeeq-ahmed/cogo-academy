const { prisma } = require("../../helpers/db-client");

const upsertSectionInDB = async (params, data) => {
    const { section_id } = params;
    const { section } = data;
    const upsertedSection = await prisma.Section.upsert({
        where: {
            section_id: section_id || '0022d48c-8e1b-46b0-b783-66c42f1f349c'
        },
        update: section,
        create: section
    })
    return upsertedSection;
};
module.exports = upsertSectionInDB;