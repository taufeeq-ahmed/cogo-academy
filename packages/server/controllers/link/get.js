const { prisma } = require("../../helpers/db-client");

const getLinkFromDB = async (params) => {
    const { link_id } = params;
    const deletedLink = await prisma.Link.findUnique({
        where: {
            link_id: link_id
        }
    })
    return deletedLink;
}

module.exports = getLinkFromDB;
