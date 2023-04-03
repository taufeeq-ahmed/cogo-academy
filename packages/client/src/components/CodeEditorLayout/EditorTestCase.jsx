import React from 'react'
import styles from './styles.module.css';
const EditorTestCase=()=>{
    const arr=["You should have 2 p elements with Kitty Ipsum text.", "Each of your p elements should have a closing tag.", "Your code should have one main element.", "The main element should have two paragraph elements as children."];

    return (
        <div>
            {arr.map((item, i)=>{
                return (
                <div className={styles.testCase_box}>
                    <p className={styles.testcase}> {item}</p>
                </div>)
            })}
        </div>
    )
}
export default EditorTestCase;