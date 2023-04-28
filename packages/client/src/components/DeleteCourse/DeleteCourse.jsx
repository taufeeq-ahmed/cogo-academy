import React from 'react'
import instance from '../../utils/axios';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './styles.module.css'
const DeleteCourse = ({ course = { course_name: 'HTML', }, show, toggle }) => {

    const handleDeleteCourse = async () => {

        const response = await instance.patch(`/course_status/${course.course_id}`, { isActive: course.isActive });
        if (response.status === 200)
            window.location.href = '/admin/courses';
        else
            alert("Something went wrong");
    }

    return (
        <Modal isShowing={show} toggle={toggle} heading={'Delete'} handleSubmit={handleDeleteCourse} submitText='Deactivate' >
            <p>Are you sure you want to deactivate {course.course_name} ?</p>
        </Modal>
    )
}

export default DeleteCourse;
