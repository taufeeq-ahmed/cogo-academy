import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ArticleContent from '../ArticleContent/ArticleContent'
import Button from '../Button/Button'
import SubmissionContent from '../SubmissionContent/SubmissionContent'
import styles from './styles.module.css'

const ContentBody = ({ element_content, next_element }) => {
    console.log("The content is : ", element_content)
    const [disabled, setDisabled] = useState(true)
    const contentRef = useRef()
    useEffect(() => {
        if (contentRef.current.scrollHeight < screen.height) {
            setDisabled(false)
        }
        const handleScroll = () => {
            if (contentRef.current.scrollTop + contentRef.current.offsetHeight + .5 >= contentRef.current.scrollHeight) {
                setDisabled(false)
            }
        };

        contentRef.current.addEventListener("scroll", handleScroll);
        return () => contentRef.current.removeEventListener("scroll", handleScroll);
    }, [])

    const handleMarkAsDone = () => {
        fetch(`http://0.0.0.0:8080/user_article/f57566b2-fc3a-4c3e-82b2-af49b0a6a070/${element_content.article_id}/add`, {
            method: 'POST'
        })
            // .then((res) => console.log("sdfsad", res))
            .then(() => window.location.href = next_element)
            .catch((err) => console.log("error", err))
    }
    let contentElement;

    console.log('element content is ', element_content)
    if (element_content.article_id) {
        const content = element_content.article_content;
        contentElement = <ArticleContent htmlContent={content} />
    } else if (element_content.submission_id) {
        const content = element_content;
        contentElement = <SubmissionContent submissionContent={content} />
    }

    return (
        <>
            <div ref={contentRef} className={styles.content_body} >
                {contentElement}
            </div>
            <div className={styles.content_footer}>
                <Button onClick={handleMarkAsDone} btnStyle={{ backgroundColor: element_content.done ? 'green' : '' }} disabled={disabled} text={element_content.done ? "Completed" : "Mark As Complete"} />
            </div>
        </>
    )
}

export default ContentBody
