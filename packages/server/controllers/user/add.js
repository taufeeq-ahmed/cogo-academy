const { prisma } = require("../../helpers/db-client");

const addUserToDB = async (data) => {
    const userData = data;
    try {
        const newUser = await prisma.User.create({
            data: userData
        })
        return newUser;
    } catch (err) {
        console.log(err);
    }


};
module.exports = addUserToDB;
