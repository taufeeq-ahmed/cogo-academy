import React, { useState } from 'react'
import styles from "./styles.module.css"
import Button from '../Button/Button';
import AdminBatchCard from "../AdminBatchCard"
import AddBatch from '../AddBatch';

const BatchesPage = ({ batches, allCourses }) => {
    const [isActive, setisActive] = useState(false);
    const isActiveHandler = () => {
        setisActive(!isActive);
    }
    return (
        <div class={styles.admin_dashboard_courses_container}>
            <div class={styles.create_course_container}>
                <div class={styles.header_title}>Batches</div>
                <Button
                    text="Create Batch"
                    className="create_course_button"
                    onClick={isActiveHandler}
                />
            </div>
            <div class={styles.courses_container}>
                {
                    batches?.map((batch) => {
                        return (
                            <AdminBatchCard
                                batch={batch}
                                courses={allCourses}
                            />
                        );
                    })
                }
            </div>
            <AddBatch show={isActive} toggle={isActiveHandler} courses={allCourses} />
        </div>
    )
}

export default BatchesPage