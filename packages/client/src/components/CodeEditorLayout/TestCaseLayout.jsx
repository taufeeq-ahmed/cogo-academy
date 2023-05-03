import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'

import styles from './styles.module.css'
import Instruction from './Instruction';
import TestCase from './TestCase';
import ConsoleTab from './ConsoleTab';

const TestCaseLayout = ({ testcases, instructions, content, activeTab, language }) => {

    const [activeButton, setActiveButton] = useState(activeTab);
    useEffect(() => {
        setActiveButton(activeTab)
    }, [activeTab])

    const buttonStyle = { backgroundColor: "white", color: "black", justifyContent: "center" }
    const activeButtonStyle = {
        backgroundColor: "#FDEBE9",
        color: "#EE3425",
    };
    let txt = ["Instructions", "Console", "Test Cases"];
    if (language == 'html') {
        txt = ["Instructions", "Canvas", "Test Cases"];
    }
    const render = () => {
        switch (activeButton) {
            case 0:
                return <Instruction instruction={instructions} />
            case 1:
                if (language === 'html') return <ConsoleTab content={content} canvas />
                else if (language === 'python') return <ConsoleTab content={content} />
                else return <ConsoleTab language={language} content={content} />
            default:
                return <TestCase testcases={testcases} />
        }
    }
    return (
        <div className={styles.box}>
            <div className={styles.btn_container}>
                {txt.map((item, i) => {
                    return (
                        <div className={styles.btn_div}>
                            <Button
                                text={item}
                                btnStyle={activeButton === i ? { ...buttonStyle, ...activeButtonStyle } : buttonStyle}
                                onClick={() => setActiveButton(i)}
                            />
                        </div>
                    )
                })}
            </div>
            <div className={styles.component_container}>
                {render()}
            </div>
        </div>
    )
};
export default TestCaseLayout;
