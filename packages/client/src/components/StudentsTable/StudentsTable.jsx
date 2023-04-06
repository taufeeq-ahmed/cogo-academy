import React, { lazy, useEffect } from 'react'
import styles from './styles.module.css'
import { useState } from 'react'
import Table from '../Table/Table'

const StudentsTable = () => {
    const [studentsData, setStudentsData] = useState({
        head: ["Name", "Batch", "Track", "Exercises", "Projects", "Score", "Rank"],
        rows: []
    })
    const [track, setTrack] = useState('Chocolate');
    const [batch, setBatch] = useState('b1');

    useEffect(() => {
        fetch(`http://0.0.0.0:8080/users_by_batch/6df42c78-a742-46c4-9a1b-32c530805866`)
            .then((res) => res.json())
            .then((data) => {
                const newData = data.map((user) => {
                    const newUser = [
                        user.user_name,
                        user.batch.batch_name,
                        user.track.track_name,
                        user.number_of_exercises_done,
                        user.number_of_projects_submitted,
                        user.total_score,
                        user.user_rank,
                    ]
                    return newUser
                })
                setStudentsData({ head: [...studentsData.head], rows: [...studentsData.rows, ...newData] })
            })
            .catch((err) => console.log(err))
    }, [])

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
            <Table data={studentsData} />
        </div>
    )
}

export default StudentsTable;
