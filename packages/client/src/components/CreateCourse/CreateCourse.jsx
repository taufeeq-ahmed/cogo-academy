import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import CreateSection from '../CreateSection/CreateSection';
import styles from './styles.module.css'
import InputBox from '../InputBox/InputBox'

const CreateCourse = () => {
    const [course, setCourse] = useState({
        course_name: '',
        sections_data: [
            { section_name: '', section_description: '', section_banner: '' }
        ]
    });
    useEffect(() => {
        // alert(JSON.stringify(course))
    }, [course])
    const setSectionState = (section, index) => {

        setCourse((prev) => {
            const updatedSection = { ...prev.sections_data[index], ...section };
            const updatedCourse = prev;
            updatedCourse.sections_data[index] = updatedSection;
            return { ...updatedCourse }
        })

    }
    const sectionElements = course.sections_data.map((s, i) => {
        return (
            <CreateSection section={s} sendSectionUp={setSectionState} index={i} />
        )
    })

    const handleCourseChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // alert("The name : " + name + " adn value is :" + value)
        setCourse((prev) => {
            const ele = { ...prev, [name]: value }
            // courseDetails = { ...courseData, ...ele }
            return ele;
        })

    }
    const handleAddSection = () => {
        const newSection = { section_name: '', section_description: '', section_banner: '' };
        // alert(JSON.stringify(course))
        setCourse((prev) => {
            const oldCourse = prev;
            oldCourse.sections_data.push(newSection);
            return { ...oldCourse };
        })
        // alert(JSON.stringify(course))

    }
    return (
        <form className={styles.edit_course}>
            <div className="course_deatils_inputs">
                <label htmlFor="course_name"></label>
                <InputBox
                    placeholder={"Course Name"}
                    style={{ fontSize: '16px' }}
                    value={course?.course_name}
                    name="course_name"
                    setValue={handleCourseChange}
                />
            </div>
            <div className="sections_details">
                {sectionElements}
            </div>
            <Button text=' + Add Section ' onClick={handleAddSection} />

        </form>
    )
}

export default CreateCourse;



