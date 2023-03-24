const { prisma } = require("../helpers/db-client");
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
}
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
const getCourseAndSectionsFromDB = async (params) => {
    // console.log(params);
    const { course_name } = params;
    const courseAndSections = await prisma.Courses.findUnique({
        where: {
            course_name: course_name,
        },
        include: {
            sections: true
        },
    });
    return courseAndSections;
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
module.exports = { addCoursetoDB, getCourseFromDB, UpdateCourseFromDB, DeleteCourseFromDB, addCourseAndSectionsToDB, getCourseAndSectionsFromDB }