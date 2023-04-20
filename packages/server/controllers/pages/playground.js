const getArticleFromDB = require("../article/get");
const getArticlesBySectionIdFromDB = require("../article/getBySectionId");
const getExerciseFromDB = require("../exercise/get");
const getAllExercisesFromDB = require("../exercise/list");
const getLinksByArticleIdFromDB = require("../link/getByArticleId");
const getSubmissionFromDB = require("../submission/get");
const getSubmissionBySectionIdFromDB = require("../submission/getBySectionId");
const getReadArticleFromDB = require("../user_article/get");

const getPlaygroundDataFromDB = async (req) => {
    console.log("userrrrrrrr", req.user)
    const { params } = req

    const { section_id, type, element_id } = params

    const { user_id } = req.user

    params.user_id = user_id

    const all_submissions = await getSubmissionBySectionIdFromDB(params);

    const all_articles = await getArticlesBySectionIdFromDB(params);
    const newAllArticles = all_articles.map((article) => {
        const { user_article, ...art } = article
        return {
            ...art,
            done: user_article.find((uA) => uA.user_id === user_id) ? true : false
        }
    })

    const all_exercises = await getAllExercisesFromDB(params)
    const newAllExercises = all_exercises.map((exercise) => {
        const { user_exercise, ...exer } = exercise
        return {
            ...exer,
            done: user_exercise.find((uE) => uE.user_id === user_id) ? true : false
        }
    })

    const getType = (elem) => {
        if (elem.article_id) return "article"
        else if (elem.submission_id) return "submission"
        else return "exercise"
    }

    const all_elements = [...newAllArticles, ...all_submissions, ...newAllExercises]
        // .sort((a,b)=>{
        //     return new Date(a.created_on) > new Date(b.created_on)
        // })
        .map((elem) => {
            const element_id = elem.article_id || elem.submission_id || elem.exercise_id
            return {
                element_id,
                element_name: elem.article_name || elem.submission_name || elem.exercise_name,
                element_time_in_mins: elem.article_time_in_mins || 0,
                element_type: getType(elem),
                done: elem?.done || false
            }
        })

    const idx = all_elements.findIndex((elem) => elem.element_id === element_id)
    console.log("sadsadas", idx, all_elements.length - 1, idx === all_elements.length - 1)
    const next_element = (idx !== all_elements.length - 1) ? `/playground/${section_id}/${all_elements[idx + 1].element_type}/${all_elements[idx + 1].element_id}` : "/"
    console.log("lkaslkdsalkjdaskld", next_element)

    if (type === 'article') {
        params.article_id = element_id;
        const clicked_element = await getArticleFromDB(params);
        const userArticle = await getReadArticleFromDB(params);
        clicked_element.done = userArticle ? true : false
        clicked_element.next_element = next_element
        const links = await getLinksByArticleIdFromDB(clicked_element);
        return { all_elements, clicked_element, links, user: req.user };
    } else if (type === 'submission') {
        params.submission_id = element_id;
        const clicked_element = await getSubmissionFromDB(params);
        clicked_element.done = false
        clicked_element.next_element = next_element
        return { all_elements, clicked_element, user: req.user };
    }
    else {
        params.exercise_id = element_id
        const clicked_element = await getExerciseFromDB(params);
        clicked_element.done = false
        clicked_element.next_element = next_element
        return { all_elements, clicked_element, user: req.user };
    }


}
module.exports = getPlaygroundDataFromDB;

