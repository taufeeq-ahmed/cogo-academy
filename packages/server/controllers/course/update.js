const { prisma } = require("../../helpers/db-client");
const upsertSectionInDB = require("../section/upsert");
const updateCourseInDB = async (params, data) => {
    const { course_id, } = params;
    const { new_data } = data;
    const { sections, course_name, image_url} = new_data;
    const updatedCourse = await prisma.Course.update({
        where: {
            course_id: course_id
        },
        data: {
            course_name: course_name,
            image_url:image_url
        }
    })
    sections.map(async (section) => {
        await upsertSectionInDB({ section_id: section.section_id }, { section: { ...section, course_id: course_id } })
    })
    return updatedCourse;
};
module.exports = updateCourseInDB;
