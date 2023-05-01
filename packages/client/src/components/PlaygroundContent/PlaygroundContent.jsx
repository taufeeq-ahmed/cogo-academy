import TestCaseLayout from "../CodeEditorLayout/TestCaseLayout";
import ContentBody from "../ContentBody";
import ArrowSVG from "/assets/arrow.svg";
import LinkSVG from "/assets/link.svg";
import React, { useEffect, useState } from 'react'
import LinkBtn from "../LinkBtn"
import styles from './styles.module.css'
import instance from "../../utils/axios";
import './styles.css'

const PlaygroundContent = ({ data, user }) => {
    const { clicked_element: element_content } = data
    const { next_element } = element_content
    const { links } = data
    const instructions = data?.clicked_element?.instruction;
    const language = data?.clicked_element?.language;


    const [testCases, setTestCases] = useState(data?.clicked_element?.test_cases)
    const [activeTab, setActiveTab] = useState(0)
    const [code, setCode] = useState(element_content.prefilled_code);
    const [content, setContent] = useState(code);

    useEffect(() => {
        setContent(code);
    }, [code])

    const handleMarkAsDone = async (data, setBtnLoading) => {

        setBtnLoading(true);
        // await delay(1000);
        if (element_content?.article_id) {
            instance.post(`/user_article/${element_content?.article_id}/add`)
                .then(() => window.location.href = next_element)
                .catch((err) => console.log("error", err))
                .finally(() => {
                    setBtnLoading(false);
                })
        }
        else if (element_content?.submission_id) {
            instance.post(`/user_submission/${element_content?.submission_id}/add`, {
                submission_url: data
            })
                .then(() => window.location.href = next_element)
                .catch((err) => console.log("error", err))
                .finally(() => {
                    setBtnLoading(false);
                })
        }
        else {
            setActiveTab(2)
            instance.post(`/user_exercise/${element_content?.exercise_id}/add`, {
                code: data
            })
                .then((resp) => {
                    // const resultLst = JSON.parse(resp?.data?.replaceAll("\'", "\"")) || []
                    console.log(resp, "hello");
                    const resultLst = resp?.data?.passed_testcase

                    setTestCases((lst) => {
                        return lst.map((item) => {
                            const status = resultLst?.includes(item.test_case_id) ? true : false
                            return {
                                ...item,
                                status
                            }
                        })
                    })
                    setContent(JSON.stringify(resp?.data?.result))


                })
                .catch(err => console.log(err))
                .finally(() => {
                    setBtnLoading(false);
                })

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
                        link={"/" + element_content.course_id}
                    />
                </div>
                <ContentBody
                    element_content={element_content}
                    next_element={next_element}
                    handleMarkAsDone={handleMarkAsDone}
                    updateCanvas={setCode}
                    user={user}
                />
            </div>
            <div className={`${styles.right_box} `}>
                {
                    element_content?.exercise_id ? (
                        <TestCaseLayout
                            testcases={testCases}
                            instructions={instructions}
                            content={content}
                            activeTab={activeTab}
                            language={language}
                        />
                    ) : (
                        <>
                            {(links) && <div className={styles.right_box_title}>Additional Links</div>}
                            {links?.map((link) => {
                                return (
                                    <a target="_blank" href={link.link_url} className={styles.linkhover}>
                                    <div className={styles.link_box}>
                                       
                                            <img src={LinkSVG} className={styles.image} alt="" />
                                      
                                        <div className={styles.link_content}>
                                            <div
                                                className={styles.link_title}
                                            >
                                                {link.link_name}
                                            </div>
                                            <div
                                                className={styles.domain_text}
                                            >
                                                {link.link_url}
                                            </div>
                                        </div>
                                    </div>
                                    </a>
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
