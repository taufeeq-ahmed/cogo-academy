const { prisma } = require("../helpers/db-client");
const addCoursetoDB = async (params) => {
    const { course_name } = params;
    // console.log(params)
    const newUser = await prisma.Courses.create({
        data: {
            course_name
        },
    })
    return newUser;
}
const getCourseFromDB = async (params) => {
    const { course_name } = params;
    // console.log(params)
    const newUser = await prisma.Courses.findUnique({
        where: {
            course_name: course_name
        },
    })
    return newUser;
}
const UpdateCourseFromDB = async (params) => {
    const { course_name } = params;
    // console.log(params)
    const newUser = await prisma.Courses.update({
        where: {
            course_name: course_name
        },
        data: {
            course_name: course_name
        }
    })
    return newUser;
}
const DeleteCourseFromDB = async (params) => {
    const { course_name } = params;
    // console.log(params)
    const newUser = await prisma.Courses.delete({
        where: {
            course_name: course_name
        },
    })
    return newUser;
}
module.exports = { addCoursetoDB, getCourseFromDB, UpdateCourseFromDB, DeleteCourseFromDB }