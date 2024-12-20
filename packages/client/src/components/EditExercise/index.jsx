import react, { useState } from "react";
import EditorComponent from "../CodeEditor";
import { RichTextEditor } from '@mantine/rte';
import Dropdown from '../DropDown/Dropdown';
import InputBox from "../InputBox/InputBox";
import './styles.css'
import { useForm, useFieldArray, FormProvider, } from 'react-hook-form';
import instance from '../../utils/axios'
import Button from '../Button/Button'
import ControlledRTEditor from "../RTEditor/ControlledRTEditor";
// import ControlledRTEditor from "../RichTextEditor/ControlledRTEditor";
const languages = [
    { label: 'HTML', value: 'html' },
    { label: 'CSS', value: 'css' },
    { label: 'JAVASCRIPT', value: 'javascript' },
    { label: 'SQL', value: 'sql' },
    { label: 'PYTHON', value: 'python' },
    { label: 'RUBY', value: 'ruby' }
];
const EditExercise = ({ exercise }) => {
    const { test_cases, exercise_name, prefilled_code, language, instruction } = exercise;
    const methods = useForm({
        defaultValues: {
            test_cases: test_cases,
            exercise_name: exercise_name,
            prefilled_code: prefilled_code,
            language: language,
            instruction: instruction
        }
    });
    const { register, control, handleSubmit, reset, watch } = methods;
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [code, setcode] = useState({ prefilled_code });
    const [text, setText] = useState('');
    const {
        fields,
        append,
        prepend,
        remove,
        swap,
        move,
        insert,
        replace
    } = useFieldArray({
        control,
        name: "test_cases"
    });
    const onSubmit = async (data) => {
        data.language = language;
        data.prefilled_code = data.prefilled_code;
        try {
            await instance.patch(`/exercise/${exercise.exercise_id}/update`, data)
            window.location.href = ('/admin/courses');
        } catch (err) {

        }
    }
    const codeHandler = (code) => {
        setcode(code);
    }

    const handleDeleteExercise = async () => {
        const cnf = window.confirm("Are you sure to delete? ")
        if (cnf) {
            const response = await instance.delete(`/exercise/${exercise.exercise_id}/delete`)
            if (response.status === 200)
                window.location.href = `/admin/courses`
            else {
                alert("Something went wrong");
            }
        }
    }

    return (
        <FormProvider {...methods}>
            <form className="edit_exercise" onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>Edit Exercise
                    <Button
                        btnType="secondary"
                        text="Delete Exercise"
                        onClick={handleDeleteExercise}
                    />
                </div>
                <div className="container">
                    <div className="box">
                        <div className="dropdown">
                            <label> Select Language</label>
                            <InputBox
                                // placeHolder={'Language'}
                                // onChange={(selectedOption) => {
                                //     setSelectedLanguage(selectedOption.label);
                                // }}
                                // options={languages}
                                styles={{ flex: 1 }}
                                name="language"
                                register={register}
                                registerQuery={"language"}
                                value={language}
                                disabled
                            />
                        </div>
                        <div className="exercise_name">
                            <label>Exercise Name</label>
                            <InputBox
                                placeholder={"Exercise Name"}
                                style={{ fontSize: '16px', marginTop: "5px" }}
                                name="exercise_name"
                                register={register}
                                style_box={{ marginTop: "5px", marginBottom: "5px" }}
                                registerQuery={"exercise_name"}
                                required />
                        </div>
                    </div>
                    {/* <div className={styles.instructions}> */}
                    <label>Instructions</label>
                    {/* <RichTextEditor
                        value={text}
                        onChange={setText}
                        register={register}
                        registerQuery={"instruction"}
                        placeholder={"instructions"}
                        required
                    /> */}
                    <ControlledRTEditor id='rte' name='instruction' />
                    {/* </div> */}
                    <div className="codeeditor">
                        <label > Enter Code </label>
                        <EditorComponent height={'60vh'} register={register} registerQuery={"prefilled_code"} name={"prefilled_code"} onChange={codeHandler} code={prefilled_code} />
                    </div>
                    {fields.map((item, index) => {
                        return (
                            <div className="testcase_details">
                                TestCase {index + 1}
                                <div>
                                    <div>
                                        <label >Text</label>
                                        <InputBox
                                            placeholder={"Text"}
                                            style={{ fontSize: '16px', marginTop: "5px" }}
                                            name="text"
                                            register={register}
                                            style_box={{ marginBottom: "5px" }}
                                            registerQuery={`test_cases.${index}.text`}
                                            required />
                                    </div>
                                    <div>
                                        <label >Input</label>
                                        <InputBox
                                            placeholder={"Input"}
                                            style={{ fontSize: '16px', marginTop: "5px" }}
                                            name="input"
                                            register={register}
                                            style_box={{ marginBottom: "5px" }}
                                            registerQuery={`test_cases.${index}.input`}
                                            required />
                                    </div>
                                    <div>
                                        <label >Output</label>
                                        <InputBox placeholder={"Output"}
                                            style={{ fontSize: '16px', marginTop: "5px" }}
                                            name="output"
                                            register={register}
                                            style_box={{ marginBottom: "5px" }}
                                            registerQuery={`test_cases.${index}.output`}
                                            required />
                                    </div>
                                    <div />
                                </div>
                            </div>
                        );
                    })}
                    <div className="control_buttons">
                        <Button
                            text="+ Add TestCase"
                            onClick={() => {
                                append({ text: '', input: '', output: '' });
                            }}
                        />

                        <Button
                            text="Reset"
                            onClick={() =>
                                reset({
                                    test_cases: []
                                })
                            }
                        />
                        <Button text=' Update ' type='submit' />
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
export default EditExercise;