const { prisma } = require("../../helpers/db-client");

const updateLinkInDB = async (params, data) => {
    const { link_id } = params;
    const { new_data } = data;
    const updatedLink = await prisma.Link.update({
        where: {
            link_id: link_id
        },
        data: new_data
    })
    return updatedLink;
}

module.exports = updateLinkInDB;