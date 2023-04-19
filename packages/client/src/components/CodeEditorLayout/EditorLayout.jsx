import React, { Fragment, useEffect, useState } from 'react'
import Button from '../Button/Button'
import EditorComponent from '../CodeEditor/index'
import EditorInstructions from './EditorInstructions'
import EditorConsole from './EditorConsole'
import EditorCanvas from './EditorCanvas'
import EditorTestCase from './EditorTestCase'

import styles from './styles.module.css'
const EditorLayout =()=>{
    const [activeButton, setActiveButton] = useState(0);
    const buttonStyle = {backgroundColor: "white", color: "black"}
    const activeButtonStyle = {
        backgroundColor: "red",
        color:"white",
      };
    const txt=["Instructions", "Canvas", "Test Cases"];
    const render =()=>{
        switch (activeButton) {
            case 0:
                return <div><EditorInstructions/></div>
                break;
            case 1:
                 return <EditorCanvas/>
                 break;
            default:
                return <EditorTestCase/>
                break;
        }
    }
    return (
        <div className={styles.box}>
        <div className={styles.btn_container}>
        {txt.map((item, i)=>{
            return (
                <div className={styles.btn_div}>
                    {/* <div className={styles.btn_container}> */}
                    <Button
                    text={item}
                    btnStyle={activeButton === i ? {...buttonStyle, ...activeButtonStyle} : buttonStyle}
                    onClick={() => setActiveButton(i)}
                    />
                    {/* </div> */}
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
export default EditorLayout;