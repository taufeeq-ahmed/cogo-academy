const { prisma } = require("../../helpers/db-client");
const getSectionByCourseIdFromDB = require("./getByCourseId");
const getSectionsFromDB = async (params) => {

    const sections = await getSectionByCourseIdFromDB(params);

    const newSections = sections.map((sec) => {
        const { articles, submissions, ...section } = sec
        const firstArticleId = articles?.[0]?.article_id;
        const firstSubmissionId = submissions?.[0]?.submission_id;
        return {
            ...section,
            first_article_id: firstArticleId,
            first_submission_id: firstSubmissionId,
        };
    });

    return newSections
};
module.exports = getSectionsFromDB;

