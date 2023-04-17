const { prisma } = require("../../helpers/db-client");

const updateUserBatchesDB = async (data, user) => {
    const { user_id } = user
    const { batches } = data
    try {
        const newUser = await prisma.user.update({
            where: {
                user_id: user_id
            },
            data: {
                batches: {
                    set: [...batches]
                }
            },
            include: {
                batches: true
            }
        })
        return newUser;
    } catch (err) {
        console.log(err);
    }


};
module.exports = updateUserBatchesDB;
