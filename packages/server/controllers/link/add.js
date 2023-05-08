const { prisma } = require("../../helpers/db-client");

const addLinkToDB = async (data) => {
    const newLink = await prisma.Link.create({
        data: data
    })
    return newLink;
}

module.exports = addLinkToDB;
