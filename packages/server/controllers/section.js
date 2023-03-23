const { prisma } = require("../helpers/db-client");

const addSectionToDB = async (params) => {

    const newSection = await prisma.Sections.create({
        data: params
    })
    return newSection;

}

const getSectionFromDB = async (params) => {
    const { name } = params;
    const section = await prisma.Sections.findUnique({
        where: {
            name: name
        },
    })
    return section;
}
const updateSectionInDB = async ({ name, newData }) => {

    const updatedSection = await prisma.Sections.update({
        where: {
            name: name
        },
        data: newData

    })
    return updatedSection;
}
const deleteSectionFromDB = async (params) => {
    const { name } = params;
    const deletedSection = await prisma.Sections.delete({
        where: {
            name: name
        },
    })
    return deletedSection;
}

module.exports = { addSectionToDB, getSectionFromDB, updateSectionInDB, deleteSectionFromDB }
