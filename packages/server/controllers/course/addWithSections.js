const { prisma } = require("../../helpers/db-client");

const addCourseWithSectionsToDB = async (params) => {
    const { course_name, sections, image_url } = params;
    const courseWithSections = await prisma.Course.create({
        data: {
            course_name: course_name,
            image_url:image_url,
            sections: {
                create: [...sections]
            }
        },

    })
    return courseWithSections;
};
module.exports = addCourseWithSectionsToDB;
