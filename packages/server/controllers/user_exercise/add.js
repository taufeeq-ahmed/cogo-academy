const { prisma } = require("../../helpers/db-client");
const fs = require('fs');
const exec = require('child_process').execSync;
const path = require('path');
const testcode = require('../../code/tests-sql')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
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
            const res = testcode({ code: code, exercise: exercise })
            console.log(res);
            return res


        } catch (error) {
            console.log("Error: ", error);

            return []
        }
    }

    else if (exercise.language === "javascript") {
        console.log("-----------------")
        console.log("JAVASCRIPT")
        try {
            // fs.writeFileSync(path.join(__dirname, '..', '..', CODE_FOLDER, "input_code.js"), code);
            // const proc = exec("node " + path.join(__dirname, '..', '..', CODE_FOLDER, "tests.js ") + "'" + JSON.stringify(exercise.test_cases) + "'");

            const testCases = {}
            const expected = {}
            exercise.test_cases.forEach(testcase => {
                testCases[testcase["test_case_id"]] = testcase["input"]
                expected[testcase["test_case_id"]] = testcase["output"]
            });

            // const userInput = 'function add(x, y) { return x + y; }';

            console.log(code)
            const func = eval(`(${code})`)
            console.log("func", func)
            const result = []
            let passed_test_cases = 0;
            for (const id in testCases) {
                try {
                    const tcase = eval(testCases[id])
                    // console.log("tcase", tcase)
                    const output = func(tcase);
                    console.log(output, expected[id], tcase, output == expected[id])
                    if (output === parseInt(expected[id])) {
                        passed_test_cases += 1
                        result.push(id)
                    }
                } catch (error) {
                    console.log(error)
                }
            }

            console.log("results", result)

            if (passed_test_cases === exercise.test_cases.length) {
                await prisma.user_Exercise.update({
                    where: {
                        user_id_exercise_id: {
                            user_id: user_id,
                            exercise_id: exercise_id
                        }
                    },
                    data: {
                        done: true,
                        score: 1,
                    }
                })
            }

            return result
        } catch (error) {
            console.log("Error: ", error);
            return []
        }
    }

    else if (exercise.language === "html") {

        try {
            // fs.writeFileSync(path.join(__dirname, '..', '..', CODE_FOLDER, "input_code.js"), code);
            // const proc = exec("node " + path.join(__dirname, '..', '..', CODE_FOLDER, "tests.js ") + "'" + JSON.stringify(exercise.test_cases) + "'");

            const expectedArray = []

            exercise.test_cases.forEach(testcase => {
                const expected = {}
                expected["test_case_id"] = testcase["test_case_id"];
                expected["output"] = testcase["output"];
                expectedArray.push(expected);
            });


            const result = []
            let passed_test_cases = 0;
            // console.log(expectedArray, 'expexted')
            expectedArray.map((exp) => {
                try {
                    const htmlString = code;
                    const func = eval(exp.output);

                    if (func) {
                        passed_test_cases += 1
                        console.log(exp.test_case_id);
                        result.push(exp.test_case_id);
                    }
                } catch (err) {
                    console.log(err)
                }
            })

            console.log("results", result)

            if (passed_test_cases === exercise.test_cases.length) {
                await prisma.user_Exercise.update({
                    where: {
                        user_id_exercise_id: {
                            user_id: user_id,
                            exercise_id: exercise_id
                        }
                    },
                    data: {
                        done: true,
                        score: 1,
                    }
                })
            }
            console.log(result)
            return result
        } catch (error) {
            console.log("Error: ", error);
            return []
        }
    }

};

module.exports = addExerciseDoneToDB;

