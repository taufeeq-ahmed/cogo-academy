import Edit from "/assets/edit.svg";
import Delete from "/assets/delete.svg";
import styles from './styles.module.css'
import { useState } from "react";
import EditBatch from "../EditBatch/EditBatch";
import DeleteBatch from "../DeleteBatch/index"

const AdminBatchCard = ({ batch, courses }) => {


    const [editOpen, setEditOpen] = useState(false);
    const toggleEditModal = () => setEditOpen(!editOpen);

    const [deleteOpen, setDeleteOpen] = useState(false);
    const toggleDeleteModal = () => setDeleteOpen(!deleteOpen);

    return (
        <div className={styles.admin_batch_card}>
            <div className={styles.batch_title}>
                <span>{batch.batch_name}</span>
                <div className={styles.batch_buttons}>
                    <div className={styles.edit_button}>
                        <img src={Edit} alt="edit_button" onClick={toggleEditModal} className={styles.edit_button} />
                    </div>
                    <div className={styles.delete_button}>
                        <img src={Delete} alt="delete_button" onClick={toggleDeleteModal} className={styles.delete_button} />
                    </div>
                </div>
            </div>
            <div className=".course_sections">{batch.courses.length} courses</div>
            <DeleteBatch show={deleteOpen} toggle={toggleDeleteModal} batch={batch} />
            <EditBatch show={editOpen} toggle={toggleEditModal} allCourses={courses} batch={batch} />
        </div>
    )
}

export default AdminBatchCard
