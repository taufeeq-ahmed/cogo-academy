const { prisma } = require("../../helpers/db-client");

const addCourseWithSectionsToDB = async (params) => {
    const { course_name, sections } = params;
    const courseWithSections = await prisma.Course.create({
        data: {
            course_name: course_name,
            sections: {
                create: [...sections]
            }
        },

    })
    return courseWithSections;
};
module.exports = addCourseWithSectionsToDB;
