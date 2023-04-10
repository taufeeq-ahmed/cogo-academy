const getAllCoursesFromDB = require("../course/list");
const getSectionByCourseIdFromDB = require("../section/getByCourseId");

const getLandingPageDataFromDB = async (req) => {

    const { params } = req

    const allCourses = await getAllCoursesFromDB();
    let sections = await getSectionByCourseIdFromDB(params);

    const newSections = sections.map(({ articles, submissions, ...section }) => {
        const firstArticleId = articles?.[0]?.article_id;
        const firstSubmissionId = submissions?.[0]?.submission_id;
        return {
            ...section,
            first_article_id: firstArticleId,
            first_submission_id: firstSubmissionId
        };
    });

    newSections.forEach(section => {
        delete section.articles;
        delete section.submissions
    });


    return { allCourses, sections: newSections, userData: req.user }

}

module.exports = getLandingPageDataFromDB

