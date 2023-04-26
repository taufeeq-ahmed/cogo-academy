const { prisma } = require("../helpers/db-client");


async function testcode( {code,exercise}){
    let result
    try{
            result = await prisma.$queryRawUnsafe(code)
        }
    catch {
            return {passed_testcase:[],result:result}
        }
    if(exercise.test_cases[0]?.output===JSON.stringify(result)){

        return {passed_testcase:[exercise?.test_cases[0]?.test_case_id],result:result}
    }
    return {passed_testcase:[],result:result}
   
    
}

module.exports = testcode;
