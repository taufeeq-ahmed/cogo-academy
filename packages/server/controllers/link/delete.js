const { prisma } = require("../../helpers/db-client");

const deleteLinkFromDB = async (params) => {
    const { link_id } = params;
    const deletedLink = await prisma.Link.delete({
        where: {
            link_id: link_id
        }
    })
    return deletedLink;
}

module.exports = deleteLinkFromDB;