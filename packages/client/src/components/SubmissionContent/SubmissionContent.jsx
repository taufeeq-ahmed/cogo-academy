import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

const SubmissionContent = ({ submissionContent, user, onChange }) => {
    const { github_username } = user;
    const { submission_name, submission_description, submission_url } = submissionContent;
    const [url, setURL] = useState(submission_url);

    const handleUrlInput = (e) => {
        setURL(e.target.value);
        onChange(e.target.value);
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
            </div>
        </div>
    )
}

export default SubmissionContent