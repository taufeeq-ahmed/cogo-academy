const addExercieToDB = require("../../controllers/exercise/add");

const addExerciseToSection = async (fastify) => {
    fastify.post("/exercise/:section_id/add", async (req, res) => {
        const newExercise = await addExercieToDB(req.params, req.body);
        res.status(200).send(newExercise)
    })
}

module.exports = addExerciseToSection;