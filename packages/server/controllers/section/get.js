const { prisma } = require("../../helpers/db-client");
const getSectionFromDB = async (params) => {
    const { name ,coureseid ,lse} = params;
    const section = await prisma.Sections.findUnique({
        where: {
            name: name
        },
    })
    return section;
};
module.exports=getSectionFromDB;