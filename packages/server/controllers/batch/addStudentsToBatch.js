const { prisma } = require("../../helpers/db-client");
const addUsersToBatchToDB = async (params, body) => {
    const { batch_id } = params;
    const { users } = body;

    const result = await prisma.batch.update({
        where: {
            batch_id: batch_id
        },
        data: {
            users: {
                set: users,
            }
        },
    })
    return result;
};
module.exports = addUsersToBatchToDB;
