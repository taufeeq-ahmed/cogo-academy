import React, { lazy, useEffect } from 'react'
import styles from './styles.module.css'
import { useState } from 'react'
import Table from '../Table/Table'
import Dropdown from '../DropDown/Dropdown'


const StudentsTable = ({ batches, tracks }) => {
    const [studentsData, setStudentsData] = useState({
        head: ["Name", "Batch", "Track", "Exercises", "Projects", "Score", "Rank"],
        rows: []
    })
    const [track, setTrack] = useState(tracks[0].track_id);
    const [batch, setBatch] = useState(batches[0].batch_id);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        fetch(`http://0.0.0.0:8080/admin/users?batch_id=${batch}`)
            .then((res) => res.json())
            .then((data) => {
                const newData = data?.map((user) => {
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
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [batch, track])

    const trackOptions = tracks.map((track) => {
        return {
            value: track.track_id,
            label: track.track_name
        }
    })

    const batchOptions = batches.map((batch) => {
        return {
            value: batch.batch_id,
            label: batch.batch_name
        }
    })

    const clearTable = () => {
        setStudentsData({
            head: ["Name", "Batch", "Track", "Exercises", "Projects", "Score", "Rank"],
            rows: []
        })
    }

    const handleTrackChange = (selected) => {
        clearTable()
        setTrack(selected.value)
    }
    const handleBatchChange = (selected) => {
        console.log(selected.value)
        clearTable()
        setBatch(selected.value)
    }

    return (
        <div className={styles.students_table} >
            <div className={styles.students_heading}>
                <div className={styles.heading_text}>
                    Students {43} {loading && "Loading.."}
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
                        <Dropdown
                            placeHolder={"Select Batch"}
                            options={batchOptions}
                            onChange={(selected) => handleBatchChange(selected)}
                        />
                    </div>
                    <div style={{ padding: 16, width: 'fit-content' }}>
                        {/* <Select
                            value={batch}
                            onChange={handleBatchChange}
                            placeholder="Select Batch"
                            options={batchOptions}
                            style={{ width: 300 }}
                        /> */}
                        <Dropdown
                            placeHolder={"Select Track"}
                            options={trackOptions}
                            onChange={handleTrackChange}
                        />
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
