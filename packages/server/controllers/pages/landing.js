const getArticlesBySectionIdFromDB = require("../article/getBySectionId");
const getAllCoursesFromDB = require("../course/list");
const getSectionByCourseIdFromDB = require("../section/getByCourseId");
const getSubmissionBySectionIdFromDB = require("../submission/getBySectionId");

const getLandingPageDataFromDB = async (params) => {

    const allCourses = await getAllCoursesFromDB();
    let sections = await getSectionByCourseIdFromDB(params);


    for (let section of sections) {
        const articles = await getArticlesBySectionIdFromDB(section.section_id);
        if (articles.length == 0) {
            const submissions = await getSubmissionBySectionIdFromDB(section.section_id);
            section.first_submission_id = submissions[0].submission_id;
        } else {
            section.first_article_id = articles[0].article_id;
        }

    }

    return { allCourses, sections }

}

module.exports = getLandingPageDataFromDB

