import React, { lazy } from 'react'
import styles from './styles.module.css'
import { useState } from 'react'
import { Select } from '@cogoport/components'
import { Input } from '@cogoport/components'
import { IcMSearchlight } from '@cogoport/icons-react';

const studentData = {
    name: "Taufeeq Ahmed",
    stream: 'React',
    exercises: 31,
    projects: 12,
    score: 220,
    rank: 12,
}
const StudentsTable = ({ studentsData = [] }) => {
    const trackOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const batchOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [track, setTrack] = useState('Chocolate');
    const [batch, setBatch] = useState('Chocolate');
    studentsData.push(studentData);
    studentsData.push(studentData);
    studentsData.push(studentData);
    studentsData.push(studentData);
    studentsData.push(studentData);
    studentsData.push(studentData);
    studentsData.push(studentData);
    studentsData.push(studentData);
    studentsData.push(studentData);
    studentsData.push(studentData);
    studentsData.push(studentData);
    const studentRows = studentsData.map((s) => {
        const vals = Object.values(s);
        const cols = vals.map((v) => <td>{v}</td>)
        return (
            <tr className={styles.student_row}>
                {cols}
            </tr>
        )
    })
    const handleTrackChange = (e) => {
        setTrack(e.target.value)
    }
    const handleBatchChange = (e) => {
        setTrack(e.target.value)
    }

    return (
        <div className={styles.students_table} >
            <div className={styles.students_heading}>
                <div className={styles.heading_text}>
                    Students {43}
                </div>
                <div className={styles.heading_inputs}>
                    <div style={{ padding: 16, width: 'fit-content' }}>
                        <Select
                            value={track}
                            onChange={handleTrackChange}
                            placeholder="Select Track"
                            options={trackOptions}
                            style={{ width: 300 }}
                        />
                    </div>
                    <div style={{ padding: 16, width: 'fit-content' }}>
                        <Select
                            value={batch}
                            onChange={handleBatchChange}
                            placeholder="Select Batch"
                            options={batchOptions}
                            style={{ width: 300 }}
                        />
                    </div>
                    <div style={{ padding: 16, width: 'fit-content' }}>
                        <Input
                            size="md"
                            prefix={<IcMSearchlight />}
                            placeholder="Search"
                        />
                    </div>
                </div>
            </div>
            <div className='students_table_rows'>
                <table className='table'>
                    <tr className={styles.heading_row}>
                        <th>Name</th>
                        <th>Track</th>
                        <th>Exercises</th>
                        <th>Projects</th>
                        <th>Score</th>
                        <th>Rank</th>
                    </tr>
                    {studentRows}
                </table>
            </div>
        </div>
    )
}

export default StudentsTable;
