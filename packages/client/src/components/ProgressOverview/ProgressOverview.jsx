import React from 'react'
// import { ResponsiveRadialBar } from '@cogoport/charts/radial-bar'
import styles from "./styles.module.css"
const data = [
    {
        "id": "Articles",
        "data": [
            {
                "x": 142,
                "y": 14
            },

        ]
    },
    {
        "id": "Exercises",
        "data": [
            {
                "x": 20,
                "y": 1
            },
        ]
    },
    {
        "id": "Projects",
        "data": [
            {
                "x": 2,
                "y": 0
            },

        ]
    }
]
// const data = [
//     {
//         id: 'Fruits',
//         data: [{ x: 'Apples', y: 32 }]
//     },
//     {
//         id: 'Vegetables',
//         data: [{ x: 'Eggplants', y: 27 }]
//     }
// ]
const userCoursesData = [
    {
        course: 'HTML',
        score: 122,
    },
    {
        course: 'CSS',
        score: 15,
    },
    {
        course: 'Ruby',
        score: 132,
    },
    {
        course: 'HTML',
        score: 122,
    },
    {
        course: 'CSS',
        score: 15,
    },
    {
        course: 'Ruby',
        score: 132,
    },

]

const ProgressOverview = ({ progressData }) => {
    const userCourses = userCoursesData.map((c) => {
        return <li className={styles.course_title}>{c.course} : {c.score}</li>
    })
    return (
        <div className={styles.progress_overview} >
            <div style={{ width: '70%', }} >
                <div className={styles.progress_title}>Progress Overview</div>
                <div className={styles.progress_overview_report}  >
                    <div style={{ width: '60%', height: '85%', }}>
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
                        <div className="articles_progress">
                            <div className={styles.number}>
                                142/150
                            </div>
                            <div className={styles.text}>
                                Articles
                            </div>
                        </div>
                        <div className="exercises_progress">
                            <div className={styles.number}>
                                14/20
                            </div>
                            <div className={styles.text}>
                                Exercises
                            </div>
                        </div>
                        <div className="exercises_progress">
                            <div className={styles.number}>
                                2/2
                            </div>
                            <div className={styles.text}>
                                Submissions
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.user_courses_report} style={{ width: '40%', height: '80%', margin: '10px' }}>
                <div className={styles.courses_title}>
                    Course Overview
                </div>
                <ol className={styles.user_courses}>
                    {userCourses}
                </ol>
            </div>
        </div>
    )
}

export default ProgressOverview;
