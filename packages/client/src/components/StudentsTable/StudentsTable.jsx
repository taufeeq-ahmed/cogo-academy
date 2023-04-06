import React, { lazy, useEffect } from 'react'
import styles from './styles.module.css'
import { useState } from 'react'
// import { Select } from '@cogoport/components'
// import { Input } from '@cogoport/components'
// import { IcMSearchlight } from '@cogoport/icons-react';

const StudentsTable = () => {
    const [studentsData, setStudentsData] = useState([])
    const trackOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const batchOptions = [
        { value: 'b1', label: 'Batch 1' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [track, setTrack] = useState('Chocolate');
    const [batch, setBatch] = useState('b1');

    useEffect(() => {
        fetch(`http://0.0.0.0:8080/users_by_batch/6df42c78-a742-46c4-9a1b-32c530805866`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setStudentsData(data)
            })
            .catch((err) => console.log(err))
    }, [])

    // studentsData.push(studentData);
    // studentsData.push(studentData);
    // studentsData.push(studentData);
    // studentsData.push(studentData);
    // studentsData.push(studentData);
    // studentsData.push(studentData);
    // studentsData.push(studentData);
    // studentsData.push(studentData);
    // studentsData.push(studentData);
    // studentsData.push(studentData);
    // studentsData.push(studentData);
    const studentRows = studentsData?.map((s) => {
        // const vals = Object.values(s);
        // console.log(vals)
        // const cols = vals.map((v) => <td>{v}</td>)
        return (
            <tr className={styles.student_row}>
                <td><a href={`admin/user/${s.user_id}`}>{s.user_name}</a></td>
                <td>{s.track.track_name}</td>
                <td>{s.number_of_exercises_done}</td>
                <td>{s.number_of_projects_submitted}</td>
                <td>{s.total_score}</td>
                <td>{s.user_rank}</td>
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
                        {/* <Select
                            value={track}
                            onChange={handleTrackChange}
                            placeholder="Select Track"
                            options={trackOptions}
                            style={{ width: 300 }}
                        /> */}
                    </div>
                    <div style={{ padding: 16, width: 'fit-content' }}>
                        {/* <Select
                            value={batch}
                            onChange={handleBatchChange}
                            placeholder="Select Batch"
                            options={batchOptions}
                            style={{ width: 300 }}
                        /> */}
                    </div>
                    <div style={{ padding: 16, width: 'fit-content' }}>
                        {/* <Input
                            size="md"
                            prefix={<IcMSearchlight />}
                            placeholder="Search"
                        /> */}
                    </div>
                </div>
            </div>
            <div className='students_table_rows'>
                <table className='table'>
                    <thead>
                        <tr className={styles.heading_row}>
                            <th>Name</th>
                            <th>Track</th>
                            <th>Exercises</th>
                            <th>Projects</th>
                            <th>Score</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentRows}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentsTable;
