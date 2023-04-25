const { prisma } = require("../../helpers/db-client");
const fs = require('fs');
const exec = require('child_process').execSync;
const path = require('path');
const testcode=require('../../code/tests-sql')

const addExerciseDoneToDB = async (req) => {
    const { user_id } = req.user
    const { exercise_id } = req.params;
    const { code } = req.body


    try {
        const newUserExercise = await prisma.user_Exercise.upsert({
            where: {
                user_id_exercise_id: {
                    user_id: user_id,
                    exercise_id: exercise_id
                }
            },
            update: {
                code: code
            },
            create: {
                user_id: user_id,
                exercise_id: exercise_id,
                score: 1,
                code: code
            }
        })
    }
    catch (err) {
        console.log(err);
    }

    const exercise = await prisma.exercise.findUnique({
        where: {
            exercise_id: exercise_id
        },
        include: {
            test_cases: true
        }
    })


    const CODE_FOLDER = "code";

    if (exercise.language === "ruby") {
   

        try {
            fs.writeFileSync(path.join(__dirname, '..', '..', CODE_FOLDER, "input_code.rb"), code);
            const proc = exec("ruby " + path.join(__dirname, '..', '..', CODE_FOLDER, "tests.rb ") + "'" + JSON.stringify(exercise.test_cases) + "'");

            return proc
        } catch (error) {
            console.log("Error: ", error);

            return []
        }
    }

    else if (exercise.language === "python") {


        try {
            fs.writeFileSync(path.join(__dirname, '..', '..', CODE_FOLDER, "input_code.py"), code);
            const proc = exec("python3 " + path.join(__dirname, '..', '..', CODE_FOLDER, "tests.py ") + "'" + JSON.stringify(exercise.test_cases) + "'");

            return proc
        } catch (error) {
            console.log("Error: ", error);

            return []
        }
    } else if (exercise.language === "SQL") {

        console.log("SQL")
        try {
           const res=testcode({code:code,exercise:exercise})
           return res
           

        } catch (error) {
            console.log("Error: ", error);

            return []
        }
    }

};
module.exports = addExerciseDoneToDB;

