import React from 'react'
import styles from './styles.module.css'
const ConsoleTab = ({ content }) => {
    return (
        <div className={styles.console_tab}>
            <p>{content}</p>
        </div>
    )
};
export default ConsoleTab;