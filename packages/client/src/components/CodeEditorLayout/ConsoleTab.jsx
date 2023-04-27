import React from 'react'
import styles from './styles.module.css'
const ConsoleTab = ({ content, canvas = 'false' }) => {
    if (canvas) {
        return (
            <div className={styles.console_tab} dangerouslySetInnerHTML={{ __html: content }}>

            </div>
        )
    }
    return (
        <div className={styles.console_tab}>
            <p>{content}</p>
        </div>
    )
};
export default ConsoleTab;
