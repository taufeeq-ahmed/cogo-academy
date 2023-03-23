const { prisma } = require("../helpers/db-client");

// const addUsertoDB = async (params) => {

//     const { email, password, name, batch, github_username } = params;
//     // console.log(params)
//     const newUser = await prisma.Users.create({
//         data: {
//             email, password, name, batch, github_username,
//             total_score: 0,

//         },
//     })
//     return newUser;

// }

// const getUserFromDB = async (params) => {
//     const { email } = params;
//     const user = await prisma.Users.findUnique({
//         where: {
//             email: email,
//         },
//     })
//     return user;
// }




// module.exports = { addUsertoDB, getUserFromDB }
