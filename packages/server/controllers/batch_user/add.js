const { prisma } = require("../../helpers/db-client");

const addUserToBatchDB = async (data) => {
    const { batch_id = '', user_id = '' } = data;

    const newMap = await prisma.batch_Link.create({
        data: {
            batch_id: batch_id,
            user_id: user_id,
        }
    })
    return newMap;
};
module.exports = addUserToBatchDB;
