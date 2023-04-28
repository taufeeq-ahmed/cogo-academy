import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios';
import instance from '../../utils/axios';
const SubmissionContent = ({ submissionContent, user }) => {
    const { user_id, github_username } = user;
    const { submission_name, submission_description, submission_url, submission_id } = submissionContent;
    const [url, setURL] = useState(submission_url);

    const handleUrlInput = (e) => {
        setURL(e.target.value);
    }
    const handleUrlSubmit = () => {
        // alert(user_id)
        // alert(submission_id)
        // alert(`https://github.com/${github_username}/${url}`)
        instance.post(`user_submission/add`,
            {
                user_id: user_id,
                submission_id: submission_id,
                submission_url: `https://github.com/${github_username}/${url}`
            },
        )
            .then((res) => {
                console.log(res);
            })
    }

    return (
        <div className={styles.submission} >
            <div className={styles.submission_name}>
                {submission_name}
            </div>
            <div className={styles.submission_description}>
                {submission_description}
            </div>
            <div className={styles.submission_link}>
                <div className={styles.submission_link_label}>
                    https://github.com/{github_username}/
                </div>
                <input
                    type="url"
                    name="submission_link"
                    className={styles.submission_url}
                    value={url}
                    onChange={(e) => handleUrlInput(e)}

                />
                {/* <button className={styles.submission_url_btn} onClick={handleUrlSubmit}>save</button> */}
            </div>
        </div>
    )
}

export default SubmissionContent