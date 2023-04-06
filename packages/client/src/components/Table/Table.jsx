import React from 'react'
import styles from './styles.module.css'

const Table = ({ data }) => {
    return (
        <table>
            <thead>
                <tr className={styles.heading_row}>
                    {data.head.map((item) => <th>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.rows.map((row) => {
                    return (<tr className={styles.student_row}>
                        {row.map((col) => <td>{col}</td>)}
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default Table