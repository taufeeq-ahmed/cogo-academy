const { prisma } = require("../../helpers/db-client");
const addBatchtoDB = async (data) => {
    const { batch_id, batch_name } = data;

    const newBatch = await prisma.Batch.create({
        data: {
            batch_name
        },
    })
    return newBatch;
};
module.exports = addBatchtoDB;
