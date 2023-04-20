import React from 'react'
import instance from '../../utils/axios';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './styles.module.css'
const ActivateCourse = ({ course = { course_name: 'HTML', }, show, toggle }) => {

    const handleActivateCourse = async () => {
        
        const response = await instance.patch(`/course_status/${course.course_id}`, {isActive: course.isActive});
        if (response.status === 200)
            window.location.href = '/admin/courses';
        else
            alert("Something went wrong");
    }

    return (
        <div className='activate_course'>
            <Modal isShowing={show} toggle={toggle} heading={'Activate'} >
                <h3>Are you Sure you want to Activate {course.course_name} ?</h3>
                <div className={styles.btn}><Button text='Activate' onClick={handleActivateCourse} /></div>
            </Modal>
        </div>
    )
}

export default ActivateCourse;
