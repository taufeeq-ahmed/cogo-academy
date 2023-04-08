import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import CreateSection from '../CreateSection/CreateSection';
import styles from './styles.module.css'
import InputBox from '../InputBox/InputBox'
import UploadSVG from '/assets/upload.svg'
import { useForm } from 'react-hook-form';
const AddCourse = () => {

    const defaultValues = {
        sections: [{ section_name: '', section_description: '', section_banner: '' }],
    };

    const { register, handleSubmit } = useForm({ defaultValues });

    const [sections, setSections] = useState(defaultValues.sections);

    const onSubmit = async (data) => {
        alert(JSON.stringify(data));
    }
    const handleAddSection = () => {
        setSections([...sections, { section_name: '', section_description: '', section_banner: '' }]);
    };
    return (
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
            <div className="sections_details">
                {
                    sections?.map((section, index) => {
                        return (
                            <div className={styles.section_details}>
                                <div className={styles.section_data}>
                                    <div className={styles.section_name}>
                                        <label htmlFor="section_name" >Section Name</label>
                                        <InputBox
                                            placeholder='Section Name'
                                            name='section_name'
                                            style={{ fontSize: '16px' }}
                                            register={register}
                                            registerQuery={`sections[${index}].section_name`}
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
                                    registerQuery={`sections[${index}].section_description`}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <Button text=' + Add Section' onClick={handleAddSection} />
            <Button text=' Submit ' type='submit' />
        </form>
    )
}

export default AddCourse;



