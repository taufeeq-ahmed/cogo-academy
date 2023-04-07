import React, { useEffect, useState } from 'react'
import Table from '../Table/Table'

const TableStudents = () => {
    const [tableData, setTableData] = useState({
        head: ["Name", "Batch", "Track", "Exercises", "Projects", "Score", "Rank"],
        rows: [
        ],
    })
    useEffect(() => {
        fetch('http://0.0.0.0:8080/admin/users')
            .then((res) => res.json())
            .then((data) => {
                const newData = data.map((user) => {
                    console.log("user", user)
                    const newUser = [
                        user?.user_name,
                        user?.batch?.batch_name,
                        user?.track?.track_name,
                        user?.number_of_exercises_done,
                        user?.number_of_projects_submitted,
                        user?.total_score,
                        user?.user_rank,
                    ]
                    return newUser
                })
                setTableData({ head: [...tableData.head], rows: [...tableData.rows, ...newData] })
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <Table data={tableData} />
    )
}

export default TableStudents