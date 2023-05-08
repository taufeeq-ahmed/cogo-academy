import React, { useState, useEffect } from 'react'
import InputBox from '../InputBox/InputBox'
import styles from './styles.module.css'
import UploadSVG from '/assets/upload.svg'

const CreateSection = ({ sectionData = {}, sendSectionUp, index }) => {

    const [section, setSection] = useState({
        section_name: sectionData.section_name || '',
        section_description: sectionData.section_description || '',
        section_banner: sectionData.section_banner || ''
    })
    useEffect(() => {
        sendSectionUp(section, index);
    }, [section])
    const handleSectionChange = async (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setSection((prev) => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <div className={styles.section_details}>
            <div className={styles.section_data}>
                <div className={styles.section_name}>
                    <label htmlFor="section_name" >Section Name</label>
                    <InputBox
                        placeholder='Section Name'
                        name='section_name'
                        value={section.section_name}
                        setValue={handleSectionChange}
                        style={{ fontSize: '16px' }}
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
                value={section.section_description}
                setValue={handleSectionChange}
                style={{ fontSize: '16px' }}
            />
        </div>
    )
}
export default CreateSection;