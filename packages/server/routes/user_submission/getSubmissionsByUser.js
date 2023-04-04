

const getSubmissionsByUser = async (fastify) => {
    fastify.get("/user_submission/:user_id", async (req, res) => {
        const submissions = await getSubmissionsByUserFromDB(req.params);
        res.status(200).send(submissions);
    });
};

module.exports = getSubmissionsByUser;

