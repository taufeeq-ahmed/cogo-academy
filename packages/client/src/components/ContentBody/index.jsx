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
        window.location.href = next_element
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
                <Button onClick={handleMarkAsDone} disabled={disabled} text="Mark As Completed" />
            </div>
        </>
    )
}

export default ContentBody
