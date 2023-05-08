const { prisma } = require("../../helpers/db-client");
const signUpUserToDB = require("../auth/signUp");

const addUserToDB = async (data) => {
    try {
        const newUser = await signUpUserToDB(data)
        return newUser;
    } catch (err) {
        console.log(err);
    }


};
module.exports = addUserToDB;
