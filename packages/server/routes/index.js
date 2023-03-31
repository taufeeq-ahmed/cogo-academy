
const addArticle = require("./article/add");
const deleteArticle = require("./article/delete");
const getArticle = require("./article/get");
const getArticlesBySectionId = require("./article/getBySectionId");
const updateArticle = require("./article/update");
const addCourse = require("./course/add");
const addCourseWithSections = require("./course/addWithSections");
const deleteCourse = require("./course/delete");
const getCourse = require("./course/get");
const getAllCourses = require("./course/list");
const updateCourse = require("./course/update");
const addLink = require("./link/add");
const deleteLink = require("./link/delete");
const getLink = require("./link/get");
const updateLink = require("./link/update");
const addSubmission = require("./submission/add")
const getSubmission = require("./submission/get")
const getSubmissionBySectionId = require('./submission/getBySectionId')
const updateSubmission = require('./submission/update')
const deleteSubmission = require('./submission/delete')
const getLandingPageData = require('./pages/landing')
const getPlaygroundData = require("./pages/playground");
const getUserDashboardData = require("./pages/userDashboard");
const addSection = require("./section/add");
const deleteSection = require("./section/delete");
const getSection = require("./section/get");
const getSectionByCourseId = require("./section/getByCourseId");
const updateSection = require("./section/update");
const addUser = require("./user/add");
const deleteUser = require("./user/delete");
const getUser = require("./user/get");
const updateUser = require("./user/update");
const getSubmissionLinkMap = require("./SubmissionLinkMap/get");
const updateSubmissionLinkMap = require("./SubmissionLinkMap/update");
const deleteSubmissionLinkMap = require('./SubmissionLinkMap/delete');
const addSubmissionLinkMap = require("./SubmissionLinkMap/add");

const getAdminPageData = require("./pages/admin");
const addBatch = require("./batch/add");
const getBatch = require("./batch/get");
const getAllBatches = require("./batch/list");
const deleteBatch = require("./batch/delete");
const updateBatch = require("./batch/update");
const addCourseToBatch = require("./batch_course/add");
const addUserToBatch = require("./batch_user/add");

const registerRoutes = async (fastify) => {
    const userRoutes = async (fastify) => {
        await addUser(fastify);
        await getUser(fastify);
        await updateUser(fastify);
        await deleteUser(fastify);

    }
    await userRoutes(fastify);
    const sectionRoutes = async (fastify) => {
        await addSection(fastify);
        await getSection(fastify);
        await updateSection(fastify);
        await deleteSection(fastify);
        await getSectionByCourseId(fastify);
    }
    await sectionRoutes(fastify);
    const courseRoutes = async (fastify) => {
        await addCourse(fastify);
        await addCourseWithSections(fastify);
        await getCourse(fastify);
        await getAllCourses(fastify);
        await updateCourse(fastify);
        await deleteCourse(fastify);
    }
    await courseRoutes(fastify);
    const articleRoutes = async (fastify) => {
        await addArticle(fastify);
        await getArticle(fastify);
        await updateArticle(fastify);
        await deleteArticle(fastify);
        await getArticlesBySectionId(fastify);
    }
    await articleRoutes(fastify);
    const linkRoutes = async (fastify) => {
        await addLink(fastify);
        await getLink(fastify);
        await updateLink(fastify);
        await deleteLink(fastify);
    }
    await linkRoutes(fastify);
    const submissionRoutes = async (fastify) => {
        await addSubmission(fastify);
        await getSubmission(fastify);
        await getSubmissionBySectionId(fastify);
        await updateSubmission(fastify);
        await deleteSubmission(fastify);
    }
    await submissionRoutes(fastify);
    const submissionLinkMapRoutes = async (fastify) => {
        await addSubmissionLinkMap(fastify);
        await getSubmissionLinkMap(fastify);
        await updateSubmissionLinkMap(fastify);
        await deleteSubmissionLinkMap(fastify);
    }
    await submissionLinkMapRoutes(fastify);
    const batchRoutes = async (fastify) => {
        await addBatch(fastify)
        await getBatch(fastify)
        await getAllBatches(fastify)
        await updateBatch(fastify)
        await deleteBatch(fastify)
    }
    await batchRoutes(fastify)
    const batchLinkCourseRoutes = async (fastify) => {
        await addCourseToBatch(fastify)
    }
    await batchLinkCourseRoutes(fastify)
    const batchLinkUserRoutes = async (fastify) => {
        await addUserToBatch(fastify)
    }
    await batchLinkUserRoutes(fastify)
    const pageRoutes = async (fastify) => {
        await getLandingPageData(fastify);
        await getUserDashboardData(fastify);
        await getPlaygroundData(fastify);

        await getAdminPageData(fastify);
    }
    await pageRoutes(fastify);
}

module.exports = registerRoutes;

