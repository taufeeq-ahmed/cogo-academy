const { prisma } = require("../../helpers/db-client");

const getSectionByCourseIdFromDB = async (params) => {
    const { course_id } = params;
    const sections = await prisma.Section.findMany({
        where: {
            course_id: course_id
        },
    })
    return sections;
};
module.exports = getSectionByCourseIdFromDB;