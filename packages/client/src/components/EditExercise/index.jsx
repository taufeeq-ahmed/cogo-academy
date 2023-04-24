import react, { useState } from "react";
import EditorComponent from "../CodeEditor";
import Dropdown from '../DropDown/Dropdown';
import InputBox from "../InputBox/InputBox";
import styles from './styles.module.css'
import { useForm, useFieldArray, } from 'react-hook-form';
import instance from '../../utils/axios'
import Button from '../Button/Button'
const languages = [{ label: 'HTML', id: '123' }, { label: 'CSS', id: '124' }, { label: 'JAVASCRIPT', id: '132' }, { label: 'SQL', id: '234' }, { label: 'PYTHON', id: '324' }, { label: 'RUBY', id: '342' }];
const EditExercise=({exercise})=>{
    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            sections: [{ text: '', input: '', output: '' }]
        }
    });
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [code, setcode]=useState('');
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
console.log(exercise);
    const onSubmit = async (data) => {
        data.language = selectedLanguage;
        data.prefilled_code = code;
        try {
            await instance.patch(`/exercise/${exercise.exercise_id}`, data)
            window.location.href = ('/admin/courses');
        } catch (err) {

        }
    }
    const codeHandler=(code)=>{
        setcode(code);
    }
    return(
        <form className={styles.edit_exercise} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.dropdown}>
                        <label> Select Language</label>
                        <Dropdown placeHolder={'Language'}
                            onChange={(selectedOption) => {
                                setSelectedLanguage(selectedOption.label);
                              }}
                            options={languages}
                            styles={{ flex: 1 }}
                            name="language"
                            register={register}
                            registerQuery={"language"}
                        />
                    </div>
                    <div className={styles.exercise_name}>
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
                    <InputBox textarea
                        placeholder={"Instructions"}
                        style={{ fontSize: '16px', marginTop: "5px" }}
                        name="instruction"
                        register={register}
                        style_box={{marginTop:"5px", marginBottom:"5px", maxWidth: 'none'}}
                        registerQuery={"instruction"}
                        max-width="none"
                        required />
                {/* </div> */}
                <div className={styles.codeeditor}>
                    <label > Enter Code </label>
                    <EditorComponent height={'60vh'} register={register} registerQuery={"prefilled_code"} name={"prefilled_code"} onChange={codeHandler}/>
                </div>
                {fields.map((item, index) => {
                    return (
                        <div className={styles.testcase_details}>
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
                                        style_box={{  marginBottom: "5px" }}
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
                <div className={styles.control_buttons}>
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
    )
}
export default EditExercise;