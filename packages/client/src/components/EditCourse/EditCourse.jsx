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
        await instance.patch(`${import.meta.env.PUBLIC_SERVER_URL}/course/${course_id}`, {
            new_data: data
        })

    }

    return (
        <Modal isShowing={show} toggle={toggle} heading={'Edit'} >
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
                <ul style={{ listStyle: 'none' }}>
                    {fields.map((item, index) => {

                        return (
                            <li key={item.id}>
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

                                    <ArticlesList sectionId={item.section_id} />
                                    <LinkBtn text=' + Add Article' link={`/admin/article/${item.section_id}/add`} btnStyle={{ fontSize: '20px' }} />
                                </div>

                            </li>

                        );
                    })}
                </ul>
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



