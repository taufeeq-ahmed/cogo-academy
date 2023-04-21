import React from 'react'
import styles from './styles.module.css';
const TestCase = ({ testcases }) => {

    return (
        <div className={styles.main_testcase}>
            {testcases.map((item) => {
                return (
                    <div className={`${styles.testcase_box} ${item?.status ? styles.success : ""} ${item?.status===false ? styles.error : ""}`}>
                        {item.text}
                    </div>)
            })}
        </div>
    )
}
export default TestCase;