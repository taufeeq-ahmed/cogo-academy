import Edit from "/assets/edit.svg";
import Delete from "/assets/delete.svg";
import Button from "../Button/Button";
import styles from './styles.module.css'
import DeleteCourse from "../DeleteCourse/DeleteCourse";
import { useState } from "react";
import EditCourse from "../EditCourse/EditCourse";

const AdminCourseCard = ({ course }) => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const toggleDeleteModal = () => setDeleteOpen(!deleteOpen);

    const [editOpen, setEditOpen] = useState(false);
    const toggleEditModal = () => setEditOpen(!editOpen);

    return (
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
    )
}

export default AdminCourseCard
