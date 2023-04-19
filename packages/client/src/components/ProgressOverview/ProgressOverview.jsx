import React from 'react'
import { ResponsiveRadialBar } from '@cogoport/charts/radial-bar'
import styles from "./styles.module.css";
const ProgressOverview = ({ progressData }) => {
    const data = [
        {
            "id": "Articles",
            "data": [
                {
                    "x": "Article",
                    "y": Math.round(((progressData?.studentData?.number_of_articles_read || 0) / 210) * 100)
                },

            ]
        },
        {
            "id": "Exercises",
            "data": [
                {
                    "x": "Exercises",
                    "y": Math.round(((progressData?.studentData?.number_of_exercises_done || 0) / 32) * 100)
                },
            ]
        },
        {
            "id": "Submissions",
            "data": [
                {
                    "x": "Submission",
                    "y": Math.round(((progressData?.studentData?.number_of_submissions || 0) / 20) * 100)
                },

            ]
        }
    ]
    return (
        <div className={styles.progress_overview} >
            <div>
                <div className={styles.progress_title}>Progress Overview</div>
                <div className={styles.progress_overview_report}  >
                    <div className={styles.chart}>
                        <ResponsiveRadialBar
                            className={styles.responsive_radial_bar}
                            data={data}
                            valueFormat=">-.2f"
                            padding={0.4}
                            cornerRadius={2}
                            colors={{ scheme: 'set1' }}
                            radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                            circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
                            legends={[
                                {
                                    itemWidth: 0,
                                    itemHeight: 0,
                                    itemTextColor: '#FFFF',
                                    symbolSize: 0,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#FFFF'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                    <div className={styles.progress_details}>
                        <div className={styles.progress_box}>
                            <div className={styles.number}>
                                {(progressData?.studentData?.number_of_articles_read || 0)} / 210
                            </div>
                            <div className={styles.text}>
                                Articles
                            </div>
                        </div>
                        <div className={styles.progress_box}>
                            <div className={styles.number}>
                                {(progressData?.studentData?.number_of_exercises_done || 0)} / 32
                            </div>
                            <div className={styles.text}>
                                Exercises
                            </div>
                        </div>
                        <div className={styles.progress_box}>
                            <div className={styles.number}>
                                {(progressData?.studentData?.number_of_submissions || 0)} / 20
                            </div>
                            <div className={styles.text}>
                                Submissions
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.user_courses_report}>
                <div className={styles.courses_title}>
                    Course Overview
                </div>
                <ol className={styles.user_courses}>
                    {progressData?.coursesDone.map((c) => {
                        return <li className={styles.course_title}><div><span>{c.course_name}</span><span> {c.total_score}</span></div></li>
                    })}
                </ol>
            </div>
        </div>
    )
}

export default ProgressOverview;
