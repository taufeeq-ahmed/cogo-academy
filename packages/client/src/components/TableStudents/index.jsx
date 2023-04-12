import React, { useEffect, useState } from 'react'
import Table from '../Table/Table'
import styles from './styles.module.css'
import Dropdown from '../DropDown/Dropdown'
import axios from 'axios'
import instance from '../../utils/axios'

const TableStudents = () => {
    const [tableData, setTableData] = useState({
        head: ["Name", "Batch", "Track", "Exercises", "Projects", "Score", "Rank"],
        rows: [
        ],
    })

    const [batchOptions, setBatchOptions] = useState([])
    const [trackOptions, setTrackOptions] = useState([])
    const [track, setTrack] = useState('');
    const [batch, setBatch] = useState('');
    const [loading, setLoading] = useState(true)

    const getQueryParams = () => {
        const queryParams = {

        }
        if (batch !== '') {
            queryParams["batch_id"] = batch
        }
        if (track !== '') {
            queryParams["track_id"] = track
        }
        return queryParams
    }

    useEffect(() => {
        setLoading(true)
        instance.get(`admin/users`, {
            params: getQueryParams()
        })
            .then((res) => res.data)
            .then((data) => {
                setTrackOptions([
                    { value: '', label: 'Select Track' },
                    ...data.trackList.map((track) => {
                        return {
                            value: track.track_id,
                            label: track.track_name
                        }
                    })
                ])
                setBatchOptions([
                    { value: '', label: 'Select Batch' },
                    ...data.batchList.map((batch) => {
                        return {
                            value: batch.batch_id,
                            label: batch.batch_name
                        }
                    })])
                const newData = data.studentsList.map((user) => {
                    console.log("user", user)
                    const newUser = [
                        { link: `/admin/user/${user.user_id}`, name: user?.user_name },
                        { name: user?.batch?.batch_name },
                        { name: user?.track?.track_name },
                        { name: user?.number_of_exercises_done },
                        { name: user?.number_of_submissions },
                        { name: user?.total_score },
                        { name: user?.user_rank },
                    ]
                    return newUser
                })
                setTableData({ head: [...tableData.head], rows: [...tableData.rows, ...newData] })
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [batch, track])

    const clearTable = () => {
        setTableData({
            head: ["Name", "Batch", "Track", "Exercises", "Projects", "Score", "Rank"],
            rows: []
        })
    }

    const handleTrackChange = (selected) => {
        console.log(selected)
        clearTable()
        setTrack(selected.value)
    }
    const handleBatchChange = (selected) => {
        console.log(selected)
        clearTable()
        setBatch(selected.value)
    }
    return (
        <div className={styles.students_table}>
            <div className={styles.students_heading}>
                <div className={styles.heading_text}>
                    Students ({tableData.rows.length}) {loading && "Loading.."}
                </div>
                <div className={styles.heading_inputs}>
                    <div style={{ padding: 16, width: 'fit-content' }}>
                        <Dropdown
                            placeHolder={"Select Batch"}
                            options={batchOptions}
                            onChange={handleBatchChange}
                        />
                    </div>
                    <div style={{ padding: 16, width: 'fit-content' }}>
                        <Dropdown
                            placeHolder={"Select Track"}
                            options={trackOptions}
                            onChange={handleTrackChange}
                        />
                    </div>
                    <div style={{ padding: 16, width: 'fit-content' }}>
                    </div>
                </div>
            </div>
            <Table data={tableData} />
        </div>
    )
}

export default TableStudents