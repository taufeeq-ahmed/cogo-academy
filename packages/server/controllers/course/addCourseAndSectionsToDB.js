const { prisma } = require("../../helpers/db-client");
const addCourseAndSectionsToDB = async (params) => {
    const { course_name, sectionsData } = params;
    const courseAndSections = await prisma.Courses.create({
        data: {
            course_name: course_name,
            sections: {
                create: [...sectionsData]
            }
        },

    })
    return courseAndSections;
};
module.exports=addCourseAndSectionsToDB;