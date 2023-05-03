const { prisma } = require("../helpers/db-client");


async function testcode( {code,exercise}){
    if(exercise.test_cases[0]?.output===code.toLowerCase()){

        return {passed_testcase:[exercise?.test_cases[0]?.test_case_id],result:code}
    }
    return {passed_testcase:[],result:result}
   
    
}

module.exports = testcode;
