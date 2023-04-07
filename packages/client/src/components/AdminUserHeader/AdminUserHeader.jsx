import React from 'react'
import styles from './styles.module.css'
import ExercisesSVG from '/assets/exercises.svg'
import ArticlesSVG from '/assets/articles.svg'
import ProjectsSVG from '/assets/projects.svg'

const AdminUserHeader = ({ userData }) => {
    return (
        <div className={styles.adminuser_header}>
            <div className="name_rank">
                <div className={styles.name}>
                    {userData?.user_name}
                </div>
                <div className={styles.under_text}>
                    Rank {userData?.user_rank}
                </div>
            </div>
            <div className="batch_number">
                <div className={styles.number}>
                    {userData?.batch?.batch_name}
                </div>
                <div className={styles.under_text}>
                    Batch
                </div>
            </div>
            <div className="track_name">
                <div className={styles.name}>
                    {userData?.track?.track_name}
                </div>
                <div className={styles.under_text}>
                    Track
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
                            {userData?.number_of_projects_submitted}
                        </div>
                        <div className={styles.under_text}>
                            Submissions
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminUserHeader
