import React from 'react'
import Button from '../Button/Button'
import styles from './styles.module.css'
import InputBox from '../InputBox/InputBox'
import UploadSVG from '/assets/upload.svg'
import { useForm, useFieldArray, } from 'react-hook-form';
import Modal from '../Modal/Modal';
import LinkBtn from '../LinkBtn';
import ArticlesList from '../ArticlesList/ArticlesList';
import instance from '../../utils/axios';
import ExerciseList from '../ExerciseList'
import AddCourse from '../AddCourse/AddCourse'
const EditCourse = ({ course, show, toggle }) => {
    const { sections, course_id, course_name } = course;

    const { register, control, handleSubmit, reset } = useForm({
        defaultValues: {
            course_name: course_name,
            sections: sections
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

        await instance.patch(`${import.meta.env.PUBLIC_SERVER_URL}/course/${course_id}`, {
            new_data: data
        })
        window.location.href = '/admin/courses';

    }

    return (
        <Modal size='big' isShowing={show} toggle={toggle} heading={'Edit Course'} handleSubmit={handleSubmit(onSubmit)} submitText="Edit Course" >
            <form className={styles.edit_course} >
                <div className={styles.course_deatils_inputs}>
                    <div className={styles.course_details_box}>
                        <label htmlFor="course_name">Course Name</label>
                        <InputBox
                            placeholder={"Course Name"}
                            style={{ fontSize: '16px' }}
                            name="course_name"
                            register={register}
                            registerQuery={"course_name"}
                            required
                        />
                    </div>
                    <div className={styles.course_details_box}>
                        <label htmlFor="file_input">Upload Image link</label>
                        <InputBox
                            placeholder={"Enter Image url"}
                            style={{ fontSize: '16px' }}
                            name="image_url"
                            register={register}
                            registerQuery={"image_url"}
                            required
                        />
                    </div>
                </div>
                {fields.map((_, index) => {
                    return (
                        <div className={styles.section_details}>
                            <p className={styles.section_name}>Section {index + 1}</p>
                            <div className={styles.section_details_box}>
                                <div className={styles.section_name}>
                                    <label htmlFor="section_name" >Section Name</label>
                                    <InputBox
                                        placeholder='Section Name'
                                        name='section_name'
                                        style={{ fontSize: '16px' }}
                                        register={register}
                                        registerQuery={`sections.${index}.section_name`}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="section_description">Section Description</label>
                                    <InputBox
                                        textarea
                                        placeholder='Section Description'
                                        rows={6}
                                        name='section_description'
                                        style={{ fontSize: '16px' }}
                                        register={register}
                                        registerQuery={`sections.${index}.description`}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className={styles.control_buttons}>
                    <Button
                        btnType="secondary"
                        text="+ Add Section"
                        onClick={() => {
                            append({ section_name: '', description: '' });
                        }}
                    />

                    <Button
                        btnType="secondary"
                        text="Reset"
                        onClick={() =>
                            reset({
                                sections: []
                            })
                        }
                    />
                </div>

            </form>
        </Modal >
    )

}

export default EditCourse;



