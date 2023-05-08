const { prisma } = require("../../helpers/db-client");
const deleteCourseFromBatchToDB=async (params, body)=>{
    const { batch_id } = params;
    const { courses } = body;
    const deletecourse = await prisma.batch.update({
        where: {
            batch_id: batch_id,
        },
        data:{
            courses:{
                disconnect: courses,
            },
        },
        select:{
            courses:true,
        }
    })
    return deletecourse;
};
module.exports=deleteCourseFromBatchToDB;