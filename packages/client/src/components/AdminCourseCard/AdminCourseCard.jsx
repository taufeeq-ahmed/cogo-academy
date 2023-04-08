import Edit from "/assets/edit.svg";
import Delete from "/assets/delete.svg";
import Button from "../Button/Button";
import styles from './styles.module.css'
import DeleteCourse from "../DeleteCourse/DeleteCourse";
import { useState } from "react";

const AdminCourseCard = ({ course }) => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const toggleModal = () => setDeleteOpen(!deleteOpen);

    return (
        <div className={styles.admin_course_card}>
            <div className={styles.course_title}>
                {course.course_name}
                <div className={styles.course_buttons}>
                    <div className="edit_button">
                        <img src={Edit} alt="edit_button" />
                    </div>
                    <div className="delete_button">
                        <img src={Delete} alt="delete_button" onClick={toggleModal} />
                    </div>
                </div>
            </div>
            <div className=".course_sections">{course.sections.length} sections</div>
            <DeleteCourse show={deleteOpen} toggle={toggleModal} course={course} />
        </div>
    )
}

export default AdminCourseCard
