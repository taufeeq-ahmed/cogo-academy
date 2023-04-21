
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
const getSubmissionLinkMap = require("./user_submission/get");
const updateSubmissionLinkMap = require("./user_submission/update");
const deleteSubmissionLinkMap = require('./user_submission/delete');
const addSubmissionLinkMap = require("./user_submission/add");

const getAdminPageData = require("./pages/admin");
const addBatch = require("./batch/add");
const getBatch = require("./batch/get");
const getAllBatches = require("./batch/list")

const getAllBatchesWithoutDetails = require("./batch/listWithoutDetails");
const deleteBatch = require("./batch/delete");
const updateBatch = require("./batch/update");
const getUserByBatch = require("./user/getByBatch");
const getAdminCoursesPageData = require("./pages/adminCourses");
const addCoursesToBatch = require("./batch/addCoursesToBatch");
const getAdminStudentsPageData = require("./pages/adminStudents");
const addTrack = require("./track/add");
const getAllTracks = require("./track/list");
const updateTrack = require("./track/update");
const deleteTrack = require("./track/delete");
const getTrack = require("./track/get");
const getFilteredUsers = require("./user/filter");
const getStudentProfilePageData = require("./pages/adminStudentProfile");
const addReadArticle = require("./user_article/add");
const getReadArticle = require("./user_article/get");
const getReadArticlesByUser = require("./user_article/getArticlesByUser");
const signUpUser = require("./auth/signUp");
const signInUser = require("./auth/signIn");

const forgotPassword = require("./auth/forgotPassword");
const userInvitation = require("./user/invite");
const getInvite = require("./user/getInvite");
const acceptInviteUser = require("./user/acceptInvite");
const isAdmin = require("./auth/isAdmin");
const addUsersToBatch = require("./batch/addUsersToBatch");
const getAdminBatchesPageData = require("./pages/adminBatches");
const getAllBatchesFromUser = require("./batch/getByUser");
const updateUserBatches = require("./user/updateUserBatches");
const addExerciseToSection = require("./exercise/add");
const getExercise = require("./exercise/get");
const getAllExerciesBySection = require("./exercise/list");
const updateStatusCourse=require('./course/updateStatus');
const updateExercies = require("./exercise/update");
const registerRoutes = async (fastify) => {
    const authRoutes = async (fastify) => {
        await signUpUser(fastify);
        await signInUser(fastify);
        await forgotPassword(fastify);
        await isAdmin(fastify)
    }
    await authRoutes(fastify)
    const userRoutes = async (fastify) => {
        await addUser(fastify);
        await getUser(fastify);
        await updateUser(fastify);
        await deleteUser(fastify);
        await getFilteredUsers(fastify)
        await updateUserBatches(fastify)
    }
    await userRoutes(fastify);
    const sectionRoutes = async (fastify) => {
        await addSection(fastify);
        await getSection(fastify);
        await updateSection(fastify);
        await deleteSection(fastify);
        await getSectionByCourseId(fastify);
        await getUserByBatch(fastify);
    }
    await sectionRoutes(fastify);
    const courseRoutes = async (fastify) => {
        await addCourse(fastify);
        await addCourseWithSections(fastify);
        await getCourse(fastify);
        await getAllCourses(fastify);
        await updateCourse(fastify);
        await deleteCourse(fastify);
        await updateStatusCourse(fastify);
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
    const exerciseRoutes = async (fastify) => {
        await addExerciseToSection(fastify)
        await getExercise(fastify)
        await getAllExerciesBySection(fastify)
        await updateExercies(fastify)
    }
    await exerciseRoutes(fastify)
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
    const userSubmissionsRoutes = async (fastify) => {
        await addSubmissionLinkMap(fastify);
        await getSubmissionLinkMap(fastify);
        await updateSubmissionLinkMap(fastify);
        await deleteSubmissionLinkMap(fastify);
    }
    await userSubmissionsRoutes(fastify);
    const batchRoutes = async (fastify) => {
        await addBatch(fastify)
        await getBatch(fastify)
        await getAllBatches(fastify)
        await updateBatch(fastify)
        await deleteBatch(fastify)
        await addCoursesToBatch(fastify)
        await addUsersToBatch(fastify)
        await getAllBatchesFromUser(fastify)
        await getAllBatchesWithoutDetails(fastify);
    }
    await batchRoutes(fastify)
    const trackRoutes = async (fastify) => {
        await addTrack(fastify)
        await getTrack(fastify)
        await getAllTracks(fastify)
        await updateTrack(fastify)
        await deleteTrack(fastify)
    }
    await trackRoutes(fastify)
    const userArticleRoutes = async (fastify) => {
        await addReadArticle(fastify)
        await getReadArticle(fastify)
        await getReadArticlesByUser(fastify)
    }
    await userArticleRoutes(fastify)
    const pageRoutes = async (fastify) => {
        await getLandingPageData(fastify);
        await getUserDashboardData(fastify);
        await getPlaygroundData(fastify);
        await getAdminCoursesPageData(fastify);
        await getAdminStudentsPageData(fastify)
        await getAdminPageData(fastify);
        await getStudentProfilePageData(fastify)
        await getAdminBatchesPageData(fastify)
    }
    await pageRoutes(fastify);
    // const authRoutes = async (fastify) => {
    //     await forgotPassword(fastify);
    // }
    // await authRoutes(fastify);
    const inviteRoutes = async (fastify) => {
        await userInvitation(fastify);
        await getInvite(fastify);
        await acceptInviteUser(fastify);
        // await signInUser(fastify);
    }
    await inviteRoutes(fastify);
}

module.exports = registerRoutes;

