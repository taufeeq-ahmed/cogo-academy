import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
const SubmissionContent = ({ submissionContent, github_username = "sumit" }) => {

    const { submission_name, submission_description, submission_url, submission_id } = submissionContent;
    const [url, setURL] = useState(submission_url);





    console.log(submissionContent, "dhjbchdc")
    const handleUrlInput = (e) => {
        setURL(e.target.value);
    }
    const handleUrlSubmit = () => {
        alert("hello")
        fetch(`${import.meta.env.PUBLIC_SERVER_URL}/submission-link-map/add`, {
            method: "POST",
            body: JSON.stringify({
                "user_id": 'ff9f9d31-3321-43da-b8b2-00063e87abd3',
                "submission_id": submission_id,
                "submission_url": `https://github.com/${github_username}/${url}`
            }),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
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
                <button className={styles.submission_url_btn} onClick={handleUrlSubmit}>save</button>
            </div>
        </div>
    )
}

export default SubmissionContent