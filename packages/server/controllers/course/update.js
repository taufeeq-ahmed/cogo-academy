const { prisma } = require("../../helpers/db-client");
const updateCourseFromDB = async (params, data) => {
    const { course_id } = params;
    console.log(data);
    const {new_data}= data;
    // console.log(params)
    const updateCourse = await prisma.Courses.update({
        where: {
            course_id: course_id
        },
        data: new_data
    })
    return updateCourse;
};
module.exports =updateCourseFromDB;