import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
import styles from './styles.module.css'

const ContentBody = ({ course_content, next_article }) => {
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

    const handleMarkAsDone = ()=>{
        console.log("Marked As Done", next_article)
        window.location.href = next_article
    }

    return (
        <>
            <div ref={contentRef} className={styles.content_body}>
                <div>
                    {course_content?.article_content}
                </div>
            </div>
            <div className={styles.content_footer}>
                <Button onClick={handleMarkAsDone} disabled={disabled} text="Mark As Completed" />
            </div>
        </>
    )
}

export default ContentBody