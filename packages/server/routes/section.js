
const { addSectionToDB, getSectionFromDB, updateSectionInDB, deleteSectionFromDB } = require("../controllers/section");
const { prisma } = require("../helpers/db-client");

const addSection = async (fastify) => {
    fastify.post("/section/add-section", async (req, res) => {
        const newSection = await addSectionToDB(req.body);
        res.status(200).send(newSection);
    });
}

const getSection = async (fastify) => {
    fastify.post("/section/get-section", async (req, res) => {
        const section = await getSectionFromDB(req.body);
        res.status(200).send(section);
    });
}

const updateSection = async (fastify) => {
    fastify.post("/section/update-section", async (req, res) => {
        const updatedSection = await updateSectionInDB(req.body);
        res.status(200).send(updatedSection);
    });
}

const deleteSection = async (fastify) => {
    fastify.post("/section/delete-section", async (req, res) => {
        const deletedSection = await deleteSectionFromDB(req.body);
        res.status(200).send(deletedSection);
    });
}



module.exports = { addSection, getSection, updateSection, deleteSection };
