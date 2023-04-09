import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import CreateSection from '../CreateSection/CreateSection';
import styles from './styles.module.css'
import InputBox from '../InputBox/InputBox'
import UploadSVG from '/assets/upload.svg'
import { useForm, useFieldArray, } from 'react-hook-form';
import Modal from '../Modal/Modal';

const EditCourse = ({ course, show, toggle }) => {
    const { sections_data } = course;
    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            sections: sections_data
        }
    });
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
        name: "sections"
    });

    const onSubmit = async (data) => {
        alert(JSON.stringify(data));
        await fetch('http://localhost:8080/course/add-with-sections', {
            method: 'PATCH',
            body: JSON.stringify({ new_data: data }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                const res = response.json()
                alert(res);
            })
    }


    return (
        <Modal isShowing={show} hide={toggle} heading={'Edit'} >
            <form className={styles.edit_course} onSubmit={handleSubmit(onSubmit)}>
                <div className="course_deatils_inputs">
                    <InputBox
                        placeholder={"Course Name"}
                        style={{ fontSize: '16px' }}
                        name="course_name"
                        register={register}
                        registerQuery={"course_name"}
                    />
                </div>
                <ul>
                    {fields.map((item, index) => {
                        return (
                            <li key={item.id}>
                                <div className={styles.section_details}>
                                    <Button type="button" onClick={() => remove(index)} text='X' />
                                    <div className={styles.section_data}>
                                        <div className={styles.section_name}>
                                            <label htmlFor="section_name" >Section Name</label>
                                            <InputBox
                                                placeholder='Section Name'
                                                name='section_name'
                                                style={{ fontSize: '16px' }}
                                                register={register}
                                                registerQuery={`sections.${index}.section_name`}
                                            />
                                        </div>
                                        <div className={styles.section_banner}>
                                            <input
                                                type="file"
                                                id="file_input"
                                                className={styles.file_input}
                                                hidden
                                            // value={section.section_banner}
                                            // name='section_banner'
                                            // setValue={handleSectionChange} 
                                            />
                                            <label htmlFor="file_input" className={styles.upload_button}>
                                                <img src={UploadSVG} alt="upload_icon" />
                                                Browse To Upload Image
                                            </label>
                                        </div>
                                    </div>
                                    <label htmlFor="section_description">Section Description</label>
                                    <InputBox
                                        textarea
                                        placeholder='Section Description'
                                        rows={6}
                                        name='section_description'
                                        style={{ fontSize: '16px' }}
                                        register={register}
                                        // value={section.section_description}
                                        registerQuery={`sections.${index}.section_description`}
                                    />


                                </div>

                            </li>

                        );
                    })}
                </ul>
                <div className={styles.control_buttons}>
                    <Button
                        text="+ Add Section"
                        onClick={() => {
                            append({ section_name: '', section_description: '', section_banner: '' });
                        }}
                    />

                    <Button
                        text="Reset"
                        onClick={() =>
                            reset({
                                section: []
                            })
                        }
                    />
                    <Button text=' Submit ' type='submit' />
                </div>
            </form>
        </Modal>
    )
}

export default EditCourse;



