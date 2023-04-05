import React from 'react'
import styles from './styles.module.css'
import ExercisesSVG from '/assets/exercises.svg'
import ArticlesSVG from '/assets/articles.svg'
import ProjectsSVG from '/assets/projects.svg'
const userData = {
    name: 'Taufeeq',
    rank: 12,
    batch: 'Batch 1',
    track: 'React'
}

const AdminUserHeader = () => {
    return (
        <div className={styles.adminuser_header}>
            <div className="name_rank">
                <div className={styles.name}>
                    {userData.name}
                </div>
                <div className={styles.under_text}>
                    Rank {userData.rank}
                </div>
            </div>
            <div className="batch_number">
                <div className={styles.number}>
                    {userData.batch}
                </div>
                <div className={styles.under_text}>
                    Batch
                </div>
            </div>
            <div className="track_name">
                <div className={styles.name}>
                    {userData.track}
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
                    <div className="icon_text">
                        <div className={styles.number}>
                            142
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
                    <div className="icon_text">
                        <div className={styles.number}>
                            14
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
                    <div className="icon_text">
                        <div className={styles.number}>
                            2
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
