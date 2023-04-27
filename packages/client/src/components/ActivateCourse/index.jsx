import React from 'react'
import instance from '../../utils/axios';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './styles.module.css'
const ActivateCourse = ({ course = { course_name: 'HTML', }, show, toggle }) => {

    const handleActivateCourse = async () => {

        const response = await instance.patch(`/course_status/${course.course_id}`, { isActive: course.isActive });
        if (response.status === 200)
            window.location.href = '/admin/courses';
        else
            alert("Something went wrong");
    }

    return (
        <Modal isShowing={show} toggle={toggle} heading={'Activate'} handleSubmit={handleActivateCourse} submitText="Activate" >
            <p>Are you sure you want to Activate {course.course_name} ?</p>
        </Modal>
    )
}

export default ActivateCourse;
