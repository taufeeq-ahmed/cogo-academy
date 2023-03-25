const { prisma } = require("../../helpers/db-client");

const addUserToDB = async (params) => {

    const { email, password, name, batch, github_username } = params;
    // console.log(params)
    const newUser = await prisma.Users.create({
        data: {
            email, password, name, batch, github_username,
            total_score: 0,

        },
    })
    return newUser;

};
module.exports=addUserToDB;