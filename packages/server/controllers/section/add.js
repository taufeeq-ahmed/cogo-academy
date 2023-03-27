const { prisma } = require("../../helpers/db-client");

const addSectionToDB = async (params, data) => {
    const { course_id } = params;
    data.course_id = course_id;
    const newSection = await prisma.Section.create({
        data: data
    })
    return newSection;
};
module.exports = addSectionToDB;
