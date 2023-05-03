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
                    return (                      
                        <tr className={styles.student_row}>
                            {row.map((col) => {
                                if (col.link) { return (<a href={col.link}><td>{col.name}</td></a>) }
                                return <td>{col.name}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;
{/* <a href={col.link}><td>{col.name}</td></a> */}