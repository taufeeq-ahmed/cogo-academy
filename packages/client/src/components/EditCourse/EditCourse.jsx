import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import UploadSVG from '/assets/upload.svg'
import styles from './styles.module.css'
import Dropdown from '../DropDown/Dropdown'
import InputBox from '../InputBox/InputBox'

let courseDetails = {
    
}


const EditSection = ({ section = {}, index }) => {

    const [sectionData, setSectionData] = useState({
        section_name: section.section_name,
        section_description: section.section_description,
        banner: section.section_banner || ''
    })


    const handleSectionChange = (e) => {
        // alert(e.target.name + " hello " + e.target.value);
        const name = e.target.name;
        const value = e.target.value;

        setSectionData((prev) => {
            const ele = { ...prev, [name]: value };
            courseDetails.sections_data[index] = { ...courseDetails.sections_data[index], ...ele };
            return ele;
        })

        // alert(JSON.stringify(courseDetails))
    }

    return (
        <div className={styles.section_details}>
            <div className={styles.section_data}>
                <div className={styles.section_name}>
                    <label htmlFor="section_name" >Section Name</label>
                    <InputBox
                        placeholder='Section Name'
                        name='section_name'
                        value={sectionData.section_name}
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
                        value={sectionData.section_banner}
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
                value={sectionData.section_description}
                onChange={handleSectionChange}
                style={{ fontSize: '16px' }}
            />
        </div>
    )
}


const EditCourse = ({ courseData = {} }) => {
    courseData = courseDetails;
    const [course, setCourse] = useState({
        course_name: courseData.course_name
    });
    const sectionElements = courseData.sections_data?.map((s, i) => {
        return (
            <EditSection section={s} index={i} />
        )
    })
    const handleCourseChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // alert("The name : " + name + " adn value is :" + value)
        setCourse((prev) => {
            const ele = { ...prev, [name]: value }
            courseDetails = { ...courseData, ...ele }
            return ele;
        })

    }
    const handleSubmit = async () => {
        await fetch('http://localhost:8080/course/add-with-sections', {
            method: 'POST',
            body: JSON.stringify(courseDetails),
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
        <form className={styles.edit_course}>
            <div className="course_deatils_inputs">
                <label htmlFor="course_name"></label>
                <InputBox
                    placeholder={"Course Name"}
                    style={{ fontSize: '16px' }}
                    value={course.course_name}
                    name="course_name"
                    setValue={handleCourseChange}
                />
            </div>
            <div className="sections_details">
                {sectionElements}
            </div>

            <Button text='Submit' onClick={handleSubmit} />
        </form>
    )

}

export default EditCourse;



