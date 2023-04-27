import React, { useState } from 'react'
import styles from "./styles.module.css"
import Button from '../Button/Button'
import AdminCourseCard from '../AdminCourseCard/AdminCourseCard'
import AddCourse from '../AddCourse/AddCourse'

const CoursesPage = ({ courses }) => {
    const [isActive, setisActive] = useState(false);
    const isActiveHandler = () => {
        setisActive(!isActive);
    }
    return (
        <div className={styles.admin_dashboard_courses_container}>
            <div className={styles.create_course_container}>
                <div className={styles.header_title}>Courses</div>
                <Button
                    text="Create Course"
                    onClick={isActiveHandler}
                    className={styles.create_course_button}
                />
            </div>
            <div className={styles.courses_container}>
                {
                    courses?.map((course) => {
                        return <AdminCourseCard course={course} />;
                    })
                }
            </div>
            <AddCourse show={isActive} toggle={isActiveHandler} />
        </div>
    )
}

export default CoursesPage