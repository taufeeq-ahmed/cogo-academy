import Edit from "/assets/edit.svg";
import Delete from "/assets/delete.svg";
import styles from './styles.module.css'
import { useState } from "react";
import EditBatch from "../EditBatch/EditBatch";

const AdminBatchCard = ({ batch, courses }) => {


    const [editOpen, setEditOpen] = useState(false);
    const toggleEditModal = () => setEditOpen(!editOpen);

    return (
        <div className={styles.admin_batch_card}>
            <div className={styles.batch_title}>
                {batch.batch_name}
                <div className={styles.batch_buttons}>
                    <div className={styles.edit_button}>
                        <img src={Edit} alt="edit_button" onClick={toggleEditModal} className={styles.edit_button} />
                    </div>
                    <div className={styles.delete_button}>
                        <img src={Delete} alt="delete_button" className={styles.delete_button} />
                    </div>
                </div>
            </div>
            <div className=".course_sections">{batch.courses.length} courses</div>
            <EditBatch show={editOpen} toggle={toggleEditModal} allCourses={courses} batch={batch} />
        </div>
    )
}

export default AdminBatchCard
