import React, { useEffect, useState } from 'react'
import LinkBtn from '../LinkBtn';
import instance from '../../utils/axios';
import styles from "./styles.module.css"

const SubmissionsList = ({ sectionId }) => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const getSubmission = async () => {
            const resp = await instance.get(`/submission/section/${sectionId}`)
            const submissionData = await resp.data;
            setSubmissions(submissionData)
        }
        getSubmission()
    }, [])

    return (
        <div className={styles.existing_submissions}>
            <p>Submissions :</p>
            <div className={styles.submissions_list} >
                {
                    submissions && submissions?.map((sub) =>
                        <LinkBtn text={sub.submission_name}
                            link={`/admin/submission/${sub.submission_id}/edit`}
                            btnStyle={{ fontSize: '13px', 'backgroundColor': '#F3FAFA', padding: '10px', fontSize: 14 }}
                            key={sub.submission_id}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default SubmissionsList;