import Edit from "/assets/edit.svg";
import Delete from "/assets/delete.svg";
import Button from "../Button/Button";
import styles from './styles.module.css'
import DeleteCourse from "../DeleteCourse/DeleteCourse";
import { useState } from "react";
import EditCourse from "../EditCourse/EditCourse";
import plus from "/assets/Plus.svg";
import ActivateCourse from "../ActivateCourse";
const AdminCourseCard = ({ course }) => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const toggleDeleteModal = () => setDeleteOpen(!deleteOpen);
    const [editOpen, setEditOpen] = useState(false);
    const toggleEditModal = () => setEditOpen(!editOpen);
    const [isActive, setisActive]=useState(false);
    const isActiveHandler=()=>{
        setisActive(!isActive);
    }
    return (
        <>
        {course.isActive ? (
        <div className={styles.admin_course_card}>
            <div className={styles.course_title}>
                {course.course_name}
                <div className={styles.course_buttons}>
                    <div className="edit_button">
                        <img src={Edit} alt="edit_button" onClick={toggleEditModal} className={styles.edit_button} />
                    </div>
                    <div className="delete_button">
                        <img src={Delete} alt="delete_button" onClick={toggleDeleteModal} className={styles.delete_button} />
                    </div>
                </div>
            </div>
            <div className=".course_sections">{course.sections.length} sections</div>
            <DeleteCourse show={deleteOpen} toggle={toggleDeleteModal} course={course} />
            <EditCourse show={editOpen} toggle={toggleEditModal} course={course} />
        </div>
        ): <div className={styles.admin_disable_course_card}>
        <div className={styles.course_title_disable}>
            <span className={styles.course_name}>{course.course_name}</span>
            {/* {course.course_name} */}
            <div className={styles.course_buttons}>
                <div className="edit_button">
                    <img src={Edit} alt="edit_button" onClick={toggleEditModal} className={styles.edit_button} />
                </div>
                <div className="activate_button">
                    <img src={plus} alt="activecourse_button" onClick={isActiveHandler} className={styles.Activate_button} />
                </div>
            </div>
        </div>
        <div className={styles.course_sections}>{course.sections.length} sections</div>
        <ActivateCourse show={isActive} toggle={isActiveHandler} course={course} />
        <EditCourse show={editOpen} toggle={toggleEditModal} course={course} />
    </div>}
        </>
    )
}

export default AdminCourseCard;
