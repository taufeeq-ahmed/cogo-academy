const { prisma } = require("../../helpers/db-client");
const deleteUsersFromBatchToDB=async(params, body)=>{
    const { batch_id } = params;
    const { users } = body;
    const result = await prisma._BatchToCourse.delete({
        where: {
            batch_id: batch_id,
        },
        data:{
            users:{
                disconnect: users,
            },
        },
        select:{
            users:true,
        }
    })
    return result;
}
module.exports=deleteUsersFromBatchToDB;