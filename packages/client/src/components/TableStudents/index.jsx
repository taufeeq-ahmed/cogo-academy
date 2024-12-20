import React, { useEffect, useState } from 'react'
import Table from '../Table/Table'
import styles from './styles.module.css'
import Dropdown from '../DropDown/Dropdown'
import instance from '../../utils/axios'
import InputBox from '../InputBox/InputBox'
import SearchSVG from "/assets/search.svg";

const TableStudents = () => {
    const [tableData, setTableData] = useState({
        head: ["Name", "Batch",
            // "Track,"  
            "Articles", "Exercises", "Score", "Rank"],
        rows: [],
    })

    const [batchOptions, setBatchOptions] = useState([])
    // const [trackOptions, setTrackOptions] = useState([])
    // const [track, setTrack] = useState('');
    const [batch, setBatch] = useState('');
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState("")
    const [debounce, setDebounce] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    const getQueryParams = () => {
        const queryParams = {

        }
        if (batch !== '') {
            queryParams["batch_id"] = batch
        }
        // if (track !== '') {
        //     queryParams["track_id"] = track
        // }
        if (query !== '') {
            queryParams["q"] = query.trim()
        }
        return queryParams
    }

    useEffect(() => {
        if (!isMounted) {
            setIsMounted(true)
            return
        }
        const timer = setTimeout(() => {
            clearTable()
            setDebounce(x => !x)
        }, 600)
        return () => clearTimeout(timer)
    }, [query])

    useEffect(() => {
        setLoading(true)
        instance.get(`admin/users`, {
            params: getQueryParams()
        })
            .then((res) => res.data?.students)
            .then((data) => {
                // setTrackOptions([
                //     { value: '', label: 'Select Track' },
                //     ...data.trackList.map((track) => {
                //         return {
                //             value: track.track_id,
                //             label: track.track_name
                //         }
                //     })
                // ])
                setBatchOptions([
                    { value: '', label: 'Select Batch' },
                    ...data.batchList.map((batch) => {
                        return {
                            value: batch.batch_id,
                            label: batch.batch_name
                        }
                    })])
                const newData = data.studentsList.map((user) => {
                    const newUser = [
                        { link: `/admin/user/${user.user_id}`, name: user?.user_name },
                        { name: user?.batches.map((b) => b.batch_name).toString() },
                        // { name: user?.track?.track_name },
                        { name: user?.number_of_articles_read || 0 },
                        { name: user?.number_of_exercises || 0 },
                        { name: user?.total_score },
                        { name: user?.user_rank },
                    ]
                    return newUser
                })
                setTableData({ head: [...tableData.head], rows: [...tableData.rows, ...[...newData]] })
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [batch,
        // track, 
        debounce])

    const clearTable = () => {
        setTableData({
            head: ["Name", "Batch",
                // "Track",
                "Articles", "Exercises", "Score", "Rank"],
            rows: []
        })
    }

    // const handleTrackChange = (selected) => {
    //     console.log(selected)
    //     clearTable()
    //     setTrack(selected.value)
    // }
    const handleBatchChange = (selected) => {
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
                    <div className={styles.search_box_dropdown}>
                        <Dropdown
                            placeHolder={"Select Batch"}
                            options={batchOptions}
                            onChange={handleBatchChange}
                        />
                    </div>
                    {/* <div style={{ padding: 16, width: 'fit-content' }}>
                        <Dropdown
                            placeHolder={"Select Track"}
                            options={trackOptions}
                            onChange={handleTrackChange}
                        />
                    </div> */}
                    <div className={styles.search_box} >
                        <InputBox icon={SearchSVG} type={"text"} value={query} setValue={(e) => setQuery(e.target.value)} placeholder={'Search for Users'} />
                    </div>
                </div>
            </div>
            <div className={styles.table_container}>
                <Table data={tableData} />
            </div>
        </div>
    )
}

export default TableStudents;