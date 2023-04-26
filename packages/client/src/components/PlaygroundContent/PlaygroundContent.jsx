import TestCaseLayout from "../CodeEditorLayout/TestCaseLayout";
import ContentBody from "../ContentBody";
import ArrowSVG from "/assets/arrow.svg";
import LinkSVG from "/assets/link.svg";
import React, { useState } from 'react'
import LinkBtn from "../LinkBtn"
import styles from './styles.module.css'
import instance from "../../utils/axios";

const PlaygroundContent = ({ data }) => {
    const { clicked_element: element_content } = data
    const { next_element } = element_content
    const { links } = data
    const instructions = data?.clicked_element?.instruction;


    const [testCases, setTestCases] = useState(data?.clicked_element?.test_cases)
    const [activeTab, setActiveTab] = useState(0)
    const [content, setcontent] = useState("")


    const handleMarkAsDone = (code) => {
        if (element_content?.article_id) {
            instance.post(`/user_article/${element_content?.article_id}/add`)
                .then(() => window.location.href = next_element)
                .catch((err) => console.log("error", err))
        }
        else if (element_content?.submission_id) {
            console.log("submitted")
        }
        else {
            setActiveTab(2)
            instance.post(`/user_exercise/${element_content?.exercise_id}/add`, {
                code: code
            })
                .then((resp) => {
                    // const resultLst = JSON.parse(resp?.data?.replaceAll("\'", "\"")) || []
                    console.log(resp,"hello");
                    const resultLst = resp?.data?.passed_testcase

                    setTestCases((lst) => {
                        return lst.map((item) => {
                            const status = resultLst.includes(item.test_case_id) ? true : false
                            return {
                                ...item,
                                status
                            }
                        })
                    })
                    setcontent( JSON.stringify(resp?.data?.result))
                    // window.location.href = next_element
                })
                .catch(err => console.log(err))
        }
    }



    return (
        <>
            <div className={styles.content}>
                <div className={styles.content_header}>
                    <LinkBtn
                        btnStyle={{ padding: "7px 14px" }}
                        iconStyle={{ transform: "rotate(-180deg)" }}
                        icon={ArrowSVG}
                        iconPlacement="left"
                        text="Back to course"
                        link={"back"}
                    />
                </div>
                <ContentBody
                    element_content={element_content}
                    next_element={next_element}
                    handleMarkAsDone={handleMarkAsDone}
                />
            </div>
            <div className={styles.right_box}>
                {
                    element_content?.exercise_id ? (
                        <TestCaseLayout
                            testcases={testCases}
                            instructions={instructions}
                            content={content}
                            activeTab={activeTab}
                        />
                    ) : (
                        <>
                            <div className={styles.right_box_title}>Additional Links</div>
                            {links.map((link) => {
                                return (
                                    <div className={styles.link_box}>
                                        <a target="_blank" href={link.link_url}>
                                            <img src={LinkSVG} alt="" />
                                        </a>
                                        <div className={styles.link_content}>
                                            <a
                                                target="_blank"
                                                href={link.link_url}
                                                className={styles.link_title}
                                            >
                                                {link.link_name}
                                            </a>
                                            <a
                                                target="_blank"
                                                href={link.link_url}
                                                className={styles.domain_text}
                                            >
                                                {link.link_url}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    )
                }
            </div>
        </>
    )
}

export default PlaygroundContent