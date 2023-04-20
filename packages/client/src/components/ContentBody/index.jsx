import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ArticleContent from '../ArticleContent/ArticleContent'
import Button from '../Button/Button'
import SubmissionContent from '../SubmissionContent/SubmissionContent'
import EditorComponent from "../CodeEditor/index"
import styles from './styles.module.css'
import instance from '../../utils/axios'

const ContentBody = ({ element_content, next_element }) => {
    const [disabled, setDisabled] = useState(true)
    const [code, setCode] = useState(element_content?.prefilled_code)

    console.log(element_content)



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
        if (element_content?.article_id) {
            instance.post(`/user_article/${element_content?.article_id}/add`)
                .then(() => window.location.href = next_element)
                .catch((err) => console.log("error", err))
        }
        else if (element_content?.submission_id) {
            console.log("submitted")
        }
        else {
            instance.post(`/user_exercise/${element_content?.exercise_id}/add`, {
                code: code
            })
                .then((resp) => {
                    console.log(resp.data)
                    // window.location.href = next_element
                })
                .catch(err => console.log(err))
        }
    }

    const onCodeChange = (code) => {
        setCode(code)
    }

    let contentElement;

    if (element_content?.article_id) {
        const content = element_content.article_content;
        contentElement = <ArticleContent htmlContent={content} />
    } else if (element_content?.submission_id) {
        const content = element_content.submission_content;
        contentElement = <SubmissionContent submissionContent={content} />
    }
    else {
        contentElement = <EditorComponent onChange={onCodeChange} code={code} language={element_content.language} />
    }

    return (
        <>
            <div ref={contentRef} className={styles.content_body} >
                {contentElement}
            </div>
            <div className={styles.content_footer}>
                <Button onClick={handleMarkAsDone}
                    btnStyle={{ backgroundColor: element_content.done ? 'green' : '' }}
                    disabled={disabled}
                    text={
                        element_content.done
                            ?
                            "Completed"
                            : "Mark As Complete"
                    }
                />
            </div>
        </>
    )
}

export default ContentBody
