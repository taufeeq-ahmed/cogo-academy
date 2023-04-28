import React from 'react'
import Button from '../Button/Button'
import styles from './styles.module.css'
import InputBox from '../InputBox/InputBox'
import { useForm, useFieldArray, } from 'react-hook-form';
import Modal from '../Modal/Modal';
import instance from '../../utils/axios';
import cross from '/assets/cross.svg';
import LinkBtn from '../LinkBtn';
import ArticlesList from "../ArticlesList/ArticlesList"
import ExerciseList from '../ExerciseList';

const EditCourse = ({ course, show, toggle }) => {
    const { sections, course_id, course_name, image_url } = course;

    const { register, control, handleSubmit, reset } = useForm({
        defaultValues: {
            course_name: course_name,
            image_url: image_url,
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

    const handleRemoveSection = (index) => {
        reset((values) => ({
            ...values,
            sections: values.sections.filter((_, i) => i !== index),
        }));
    };

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
                {fields.map((item, index) => {
                    return (
                        <div className={styles.section_details}>
                            {index > sections.length - 1 && <div className={styles.remove_section} onClick={() => handleRemoveSection(index)} >
                                <img src={cross} text='Close' />
                            </div>}
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
                                {
                                    index < sections.length && (
                                        <>
                                            <div>
                                                <div className={styles.articles_list_box}>
                                                    <ArticlesList sectionId={item.section_id} />
                                                    <LinkBtn text=' + Add Article' link={`/admin/article/${item.section_id}/add`} />
                                                </div>
                                                <div className={styles.exercises_list_box}>
                                                    <ExerciseList sectionId={item.section_id} />
                                                    <LinkBtn text=' + Add Exercise' link={`/admin/exercise/${item.section_id}/add`} />
                                                </div>
                                            </div></>
                                    )
                                }
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
                            reset(values => ({
                                ...values,
                                sections: [...sections]
                            }))
                        }
                    />
                </div>

            </form>
        </Modal >
    )

}

export default EditCourse;



