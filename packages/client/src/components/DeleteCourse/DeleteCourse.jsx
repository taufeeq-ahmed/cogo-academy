import React from 'react'
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
const DeleteCourse = ({ course = { course_name: 'HTML', }, show, toggle }) => {

    const handleDeleteCourse = () => {
        alert("Deleted the Course !!");
    }

    return (
        <div className='delete_course'>
            <Modal isShowing={show} toggle={toggle} heading={'Delete'} >
                <h3>Are you Sure you want to delete {course.course_name} ?</h3>
                <Button text='Delete' onClick={handleDeleteCourse} />
            </Modal>
        </div>
    )
}

export default DeleteCourse;
