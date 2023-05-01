import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css'
const ConsoleTab = ({ content, canvas = 'false' }) => {

    const divRef = useRef();
    useEffect(() => {
        const div = divRef.current;
        const shadowRoot = div.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = content;
    }, [content]);

    if (canvas) {
        return <div ref={divRef} />;
    }
    return (
        <div className={styles.console_tab}>
            <p>{content}</p>
        </div>
    )
};
export default ConsoleTab;
