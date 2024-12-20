import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ArticleContent from '../ArticleContent/ArticleContent'
import Button from '../Button/Button'
import SubmissionContent from '../SubmissionContent/SubmissionContent'
import EditorComponent from "../CodeEditor/index"
import styles from './styles.module.css'

const ContentBody = ({ element_content, handleMarkAsDone, updateCanvas, user }) => {
    const [disabled, setDisabled] = useState(true)
    const [code, setCode] = useState(element_content?.prefilled_code)
    const [url, setUrl] = useState("")
    const [btnLoading, setBtnLoading] = useState(false);

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

    const onCodeChange = (code) => {
        setCode(code)
        updateCanvas(code);
    }

    const onURLChange = (url) => {
        setUrl(url)
    }

    let contentElement;

    if (element_content?.article_id) {
        const content = element_content.article_content;
        contentElement = <ArticleContent htmlContent={content} />
    } else if (element_content?.submission_id) {
        const content = element_content.submission_content;
        contentElement = <SubmissionContent onChange={onURLChange} submissionContent={element_content} user={user} />
    }
    else {
        contentElement = <EditorComponent onChange={onCodeChange} code={code} language={element_content.language} />
    }


    const getData = () => {
        if (element_content?.article_id) {
            return ""
        } else if (element_content?.submission_id) {
            return url
        }
        else {
            return code
        }
    }

    return (
        <>
            <div ref={contentRef} className={styles.content_body} >
                {contentElement}
            </div>
            <div className={styles.content_footer}>
                <Button onClick={() => handleMarkAsDone(getData(), setBtnLoading)}
                    btnStyle={{ backgroundColor: element_content.done ? 'green' : '' }}
                    disabled={disabled}
                    loading={btnLoading}
                    text={
                        element_content?.exercise_id || element_content?.submission_id ?
                            (element_content.done
                                ?
                                "Completed"
                                : "Submit") :
                            (element_content.done
                                ?
                                "Completed"
                                : "Mark As Complete")
                    }
                />
            </div>
        </>
    )
}

export default ContentBody
