import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css'
function IsJsonString(str) {
    try {
        var json = JSON.parse(str);
        return (typeof json === 'object');
    } catch (e) {
        return false;
    }
}
const ConsoleTab = ({ content, canvas = false, language }) => {
    if (canvas) {
        const divRef = useRef();
        useEffect(() => {
            if (canvas) {
                const div = divRef.current;
                const shadowRoot = div.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = (content) ? content : '';
            }

        }, []);
        console.log("inside can");
        return <div ref={divRef} />;
    }

    if (language === "sql") {
        if (!IsJsonString(content)) {
            return (
                <div className={styles.console_tab}>
                    <p>{(content) && content}</p>
                </div>
            )
        }
        else {

            const newcontent = JSON.parse(content)
            const head = Object.keys(newcontent[0])

            return (
                <div className={styles.console_tab}>
                    <table>
                        <thead>
                            <tr className={styles.heading_row}>
                                {head.map((item) => <th>{item}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {newcontent?.map((row) => {
                                const values = Object.values(row)
                                return (<tr className={styles.student_row}>

                                    {values.map((val) => {

                                        return <td>{val}</td>

                                    })}
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    return (
        <div className={styles.console_tab}>
            <p>{(content) && content}</p>
        </div>
    )
};
export default ConsoleTab;
