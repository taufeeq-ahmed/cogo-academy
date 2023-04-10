import React from 'react'
import styles from './styles.module.css'
import ProfileSVG from '/assets/Profile.svg'
import BatchesSVG from '/assets/batches.svg'
import CoursesSVG from '/assets/courses.svg'
const AdminHeader = ({ data }) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var today = new Date();
    var date = today.getDate() + ' ' + (months[today.getMonth() + 1]) + ' ' + today.getFullYear();
    return (
        <div className={styles.admin_header}>
            <div className="admin_details">
                <div className={styles.welcome_text}>
                    Welcome Back {data.user.user_name} !
                </div>
                <div className="current_date">
                    {date}
                </div>
            </div>
            <div className={styles.all_students_details}>
                <div className={styles.all_students_section}>
                    <div className={styles.icon_container}><img src={ProfileSVG} alt="profile" className={styles.icon} /></div>
                    <div className={styles.stat_box}>
                        <div className={styles.number}>
                            {data.studentsCount}
                        </div>
                        Students
                    </div>

                </div>
                <div className={styles.all_students_section}>
                    <div className={styles.icon_container}><img src={BatchesSVG} alt="batches" className={styles.icon} /></div>

                    <div>
                        <div className={styles.number}>
                            {data.batchCount}
                        </div>
                        Batches
                    </div>
                </div>
                <div className={styles.all_students_section}>
                    <div className={styles.icon_container}><img src={CoursesSVG} alt="profile" className={styles.icon} /></div>

                    <div>
                        <div className={styles.number}>
                            {data.courseCount}
                        </div>
                        Courses
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader;
