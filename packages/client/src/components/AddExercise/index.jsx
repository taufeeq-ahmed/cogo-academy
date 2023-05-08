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
// import JoditEditor from "jodit-react";
// import ControlledRTEditor from "../RichTextEditor/ControlledRTEditor";
const languages = [
    { label: 'HTML', value: 'html' },
    { label: 'CSS', value: 'css' },
    { label: 'JAVASCRIPT', value: 'javascript' },
    { label: 'SQL', value: 'sql' },
    { label: 'PYTHON', value: 'python' },
    { label: 'RUBY', value: 'ruby' }
];

const AddExercise = ({ sectionId }) => {
    const methods = useForm({
        defaultValues: {
            test_cases: [{ text: '', input: '', output: '' }]
        }
    });

    const { register, control, handleSubmit, reset, watch } = methods;
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [code, setcode] = useState('');
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
        data.language = selectedLanguage;
        data.prefilled_code = code;
        try {
            await instance.post(`/exercise/${sectionId}/add`, data)
            window.location.href = ('/admin/courses');
        } catch (err) {

        }
    }
    const codeHandler = (code) => {
        setcode(code);
    }

    return (
        <FormProvider {...methods}>
            <form className="edit_exercise" onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <div className="box">
                        <div className="dropdown">
                            <label> Select Language</label>
                            <Dropdown placeHolder={'Language'}
                                onChange={(selectedOption) => {
                                    setSelectedLanguage(selectedOption.value);
                                }}
                                options={languages}
                                styles={{ flex: 1 }}
                                name="language"
                                register={register}
                                registerQuery={"language"}
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
                    {/* <div className={instructions}> */}
                    <label>Instructions</label>
                    {/* <InputBox textarea
                            placeholder={"Instructions"}
                            style={{ fontSize: '16px', marginTop: "5px" }}
                            name="Instruction"
                            register={register}
                            style_box={{ marginTop: "5px", marginBottom: "5px" }}
                            registerQuery={"instruction"}
                            required /> */}
                    {/* <RichTextEditor
                        value={text}
                        onChange={setText}
                        register={register}
                        registerQuery={"instruction"}
                        placeholder={"instructions"}
                        required
                    /> */}
                    {/* <JoditEditor value={text} onBlur={setText} register={register}
                    registerQuery={"instruction"}
                    placeholder={"instructions"}
                    required /> */}
                    <ControlledRTEditor id='rte' name='instruction' />
                    {/* </div> */}
                    <div className="codeeditor">
                        <label > Enter Code </label>
                        <EditorComponent height={'60vh'} register={register} registerQuery={"prefilled_code"} name={"prefilled_code"} onChange={codeHandler} />
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
                        <Button text=' Submit ' type='submit' />
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
export default AddExercise;