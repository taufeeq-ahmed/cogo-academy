import React, { useState } from 'react'
import styles from './styles.module.css'
import ExercisesSVG from '/assets/exercises.svg'
import ArticlesSVG from '/assets/articles.svg'
import ProjectsSVG from '/assets/projects.svg'
import EditSVG from "/assets/edit.svg";
import EditBatchStudent from '../EditBatchStudent'

const AdminUserHeader = ({ userData, allBatches }) => {

    const [editOpen, setEditOpen] = useState(false);
    const toggleEditModal = () => setEditOpen(!editOpen);

    return (
        <div className={styles.adminuser_header}>
            <div className={styles.admin_leftcontent}>
                <div>
                    <div className={styles.name}>
                        {userData?.user_name}
                    </div>
                    {/* <div className={styles.under_text}>
                    Rank {userData?.user_rank}
                </div> */}
                </div>
                <div style={{ position: "relative" }}>
                    <div>
                        <div className={styles.number}>
                            {userData?.batches?.[0]?.batch_name}
                        </div>
                        <img onClick={toggleEditModal} className={styles.batch_edit_btn} src={EditSVG} alt='edit-btn' />
                    </div>
                    <div className={styles.under_text}>
                        Batch
                    </div>
                </div>
                <div>
                    <div className={styles.name}>
                        {/* {userData?.track?.track_name} */}
                        Track 1
                    </div>
                    <div className={styles.under_text}>
                        Track
                    </div>
                </div>
            </div>
            <div className={styles.icons_details}>
                <div className={styles.exercises_number}>
                    <div className={styles.exercises_icon_container}>
                        <img src={ExercisesSVG} alt="exercises" className={styles.icon} />
                    </div>
                    <div className={styles.icon_text}>
                        <div className={styles.number}>
                            {userData?.number_of_exercises_done}
                        </div>
                        <div className={styles.under_text}>
                            Exercises
                        </div>
                    </div>
                </div>
                <div className={styles.articles_number}>
                    <div className={styles.articles_icon_container}>
                        <img src={ArticlesSVG} alt="exercises" className={styles.icon} />
                    </div>
                    <div className={styles.icon_text}>
                        <div className={styles.number}>
                            {userData?.number_of_articles_read}
                        </div>
                        <div className={styles.under_text}>
                            Articles
                        </div>
                    </div>
                </div>
                <div className={styles.projects_number}>
                    <div className={styles.projects_icon_container}>
                        <img src={ProjectsSVG} alt="exercises" className={styles.icon} />
                    </div>
                    <div className={styles.icon_text}>
                        <div className={styles.number}>
                            {userData?.number_of_submissions}
                        </div>
                        <div className={styles.under_text}>
                            Submissions
                        </div>
                    </div>
                </div>
            </div>
            <EditBatchStudent batches={userData.batches} show={editOpen} toggle={toggleEditModal} allBatches={allBatches} />
        </div>
    )
}

export default AdminUserHeader
