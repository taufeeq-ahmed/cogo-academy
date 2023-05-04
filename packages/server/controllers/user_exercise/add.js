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
        const fileName = user_id + exercise_id;
        try {
            exercise.test_cases.map((tc) => {
                tc.fileName = fileName;
            })
            fs.writeFileSync(path.join(__dirname, '..', '..', CODE_FOLDER + '/ruby', fileName + ".rb"), code, () => {
                console.log("saved succesfully");
            });
            const proc = exec("ruby " + path.join(__dirname, '..', '..', CODE_FOLDER + '/ruby', "tests.rb ") + "'" + JSON.stringify(exercise.test_cases) + "'");
            const { passed: res, console_result } = JSON.parse(String.fromCharCode(...proc))
            console.log(JSON.parse(String.fromCharCode(...proc)))
            if (res.length === exercise.test_cases.length) {
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
            fs.rm(path.join(__dirname, '..', '..', CODE_FOLDER + '/ruby', fileName + ".rb"), () => {
                console.log("removed")
            });
            return { passed_testcase: res, result: console_result }
        } catch (error) {
            fs.rm(path.join(__dirname, '..', '..', CODE_FOLDER + '/ruby', fileName + ".rb"), () => {
                console.log("removed")
            });
            console.log("Error: ", error);
            return { passed_testcase: [], result: "" }
        }

    }

    else if (exercise.language === "python") {
        const fileName = user_id + exercise_id;
        try {

            exercise.test_cases.map((tc) => {
                tc.fileName = fileName;
            })
            fs.writeFileSync(path.join(__dirname, '..', '..', CODE_FOLDER + '/python', fileName + ".py"), code, () => {
            });
            const proc = exec("python3 " + path.join(__dirname, '..', '..', CODE_FOLDER + '/python', "tests.py ") + "'" + JSON.stringify(exercise.test_cases) + "'");
            const { passed: res, console_result } = JSON.parse(String.fromCharCode(...proc))
            if (res.length === exercise.test_cases.length) {
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
            fs.rm(path.join(__dirname, '..', '..', CODE_FOLDER + '/python', fileName + ".py"), () => {
                console.log("removed")
            });
            return { passed_testcase: res, result: console_result }
        } catch (error) {
            fs.rm(path.join(__dirname, '..', '..', CODE_FOLDER + '/python', fileName + ".py"), () => { });
            console.log("Error: ", error);
            return { passed_testcase: [], result: "" }
        }
    } else if (exercise.language === "sql") {
        try {
            const res = await testcode({ code: code, exercise: exercise })
            if (res.passed_testcase.length === exercise.test_cases.length) {

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

            return res

        } catch (error) {
            console.log("Error: ", error);

            return { passed_testcase: [], result: "" }
        }
    }

    else if (exercise.language === "javascript") {
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
                    console.log(output, expected[id], tcase, output === expected[id])
                    const isPassed = JSON.stringify(output) === JSON.stringify(expected[id]);
                    console.log("isPassed:", isPassed)
                    if (isPassed) {

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

            return { passed_testcase: result, result: "" }
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
            console.log(expectedArray, 'expexted');
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
            return { passed_testcase: result }
        } catch (error) {
            console.log("Error: ", error);
            return []
        }
    }

};

module.exports = addExerciseDoneToDB;

