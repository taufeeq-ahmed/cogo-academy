import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'

import styles from './styles.module.css'
import InputBox from '../InputBox/InputBox'
import UploadSVG from '/assets/upload.svg'
import { useForm, useFieldArray, } from 'react-hook-form';
import instance from '../../utils/axios'

const AddCourse = () => {
    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            sections: [{ section_name: '', description: '' }]
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

        try {
            await instance.post(`/course/add-with-sections`, data)
        } catch (err) {

        }
    }


    return (
        <form className={styles.edit_course} onSubmit={handleSubmit(onSubmit)}>
            <div className="course_deatils_inputs">
                <div className="course_name">
                    <label htmlFor="course_name">Course Name</label>
                    <InputBox
                        placeholder={"Course Name"}
                        style={{ fontSize: '16px' }}
                        name="course_name"
                        register={register}
                        registerQuery={"course_name"}
                    />
                </div>
            </div>

            {fields.map((item, index) => {
                return (

                    <div className={styles.section_details}>
                        {/* <Button type="button" onClick={() => remove(index)} text='X' /> */}
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
                            registerQuery={`sections.${index}.description`}
                        />


                    </div>



                );
            })}

            <div className={styles.control_buttons}>
                <Button
                    text="+ Add Section"
                    onClick={() => {
                        append({ section_name: '', description: '' });
                    }}
                />

                <Button
                    text="Reset"
                    onClick={() =>
                        reset({
                            sections: []
                        })
                    }
                />
                <Button text=' Submit ' type='submit' />
            </div>

        </form>
    )
}

export default AddCourse;



