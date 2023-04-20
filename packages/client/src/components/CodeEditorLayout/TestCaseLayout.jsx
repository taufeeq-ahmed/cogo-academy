import React, { Fragment, useEffect, useState } from 'react'
import Button from '../Button/Button'

import styles from './styles.module.css'
import Instruction from './Instruction';
import Canvas from './Canvas';
import TestCase from './TestCase';
const TestCaseLayout = ({ testcases, instructions, content }) => {
    const [activeButton, setActiveButton] = useState(0);
    const buttonStyle = { backgroundColor: "white", color: "black", justifyContent: "center" }
    const activeButtonStyle = {
        backgroundColor: "red",
        color: "white",
    };
    const txt = ["Instructions", "Canvas", "Test Cases"];
    const render = () => {
        switch (activeButton) {
            case 0:
                return <Instruction instruction={instructions} />
            case 1:
                return <Canvas content={content} />
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