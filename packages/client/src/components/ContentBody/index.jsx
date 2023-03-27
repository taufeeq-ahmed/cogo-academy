import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
import styles from './styles.module.css'

const ContentBody = ({ course_content }) => {
    const [disabled, setDisabled] = useState(true)
    const contentRef = useRef()
    useEffect(() => {
        const handleScroll = () => {
            console.log( contentRef.current.scrollTop)
            if (contentRef.current.scrollTop + contentRef.current.offsetHeight + .5 >= contentRef.current.scrollHeight) {
                setDisabled(false)
            }
        };

        contentRef.current.addEventListener("scroll", handleScroll);
        return () => contentRef.current.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <>
            <div ref={contentRef} className={styles.content_body}>
                <div>
                    {course_content?.article_content}
                </div>
            </div>
            <div className={styles.content_footer}>
                <Button disabled={disabled} text="Mark As Completed" />
            </div>
        </>
    )
}

export default ContentBody