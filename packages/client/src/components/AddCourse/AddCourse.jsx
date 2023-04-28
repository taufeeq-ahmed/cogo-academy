import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'

import styles from './styles.module.css'
import InputBox from '../InputBox/InputBox'
import UploadSVG from '/assets/upload.svg'
import { useForm, useFieldArray, } from 'react-hook-form';
import instance from '../../utils/axios'
import Modal from '../Modal/Modal'

const AddCourse = ({ show, toggle }) => {
    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            sections: [{ section_name: '', description: '' }]
        }
    });
    const {
        fields,
        append,
    } = useFieldArray({
        control,
        name: "sections"
    });

    const onSubmit = async (data) => {

        try {
            await instance.post(`/course/add-with-sections`, data)
            window.location.href = ('/admin/courses');
        } catch (err) {

        }
    }


    return (
        <Modal isShowing={show} toggle={toggle} heading={'Create Course'} handleSubmit={handleSubmit(onSubmit)} submitText="Submit" >
            <form className={styles.edit_course} >
                <div className="course_deatils_inputs">
                    <div className="course_name">
                        <label htmlFor="course_name">Course Name</label>
                        <InputBox
                            placeholder={"Course Name"}
                            style={{ fontSize: '16px', marginTop: "5px" }}
                            name="course_name"
                            register={register}
                            style_box={{ marginTop: "5px", marginBottom: "5px" }}
                            registerQuery={"course_name"}
                            required
                        />
                    </div>
                </div>
                <div className={styles.section_banner}>
                    <label htmlFor="file_input" className={styles.upload_label}>
                        Upload Image link
                    </label>
                    <InputBox
                        placeholder={"Enter Image url"}
                        style={{ fontSize: '16px' }}
                        name="image_url"
                        // type="url"
                        register={register}
                        style_box={{ marginTop: "5px", marginBottom: "20px" }}
                        registerQuery={"image_url"}
                        required
                    />
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
                                        style_box={{ marginTop: "5px", marginBottom: "5px" }}
                                        registerQuery={`sections.${index}.section_name`}
                                        required
                                    />
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
                                style_box={{ marginTop: "5px", marginBottom: "5px" }}
                                registerQuery={`sections.${index}.description`}
                                required
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
                    {/* <Button text=' Submit ' type='submit' /> */}
                </div>

            </form>
        </Modal>
    )
}

export default AddCourse;



