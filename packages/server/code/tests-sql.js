const { prisma } = require("../helpers/db-client");


function testcode( {code,exercise}){

    console.log(exercise,code,"hello");
    return [];
}

module.exports = testcode;
