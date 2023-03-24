const { prisma } = require("../../helpers/db-client");
const addSectionToDB = async (params) => {

    const newSection = await prisma.Sections.create({
        data: params
    })
    return newSection;

};
module.exports=addSectionToDB;