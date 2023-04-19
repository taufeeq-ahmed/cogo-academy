import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"

const BatchSelect = ({ batches }) => {

    const [selectedBatch, setSelectedBatch] = useState(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const expires = new Date(Date.now() + 60 * 60 * 1000); // Cookie expires in 1 hour
        selectedBatch !== null && (document.cookie = `batch=${batches[parseInt(selectedBatch)].batch_id};  expires=${expires.toUTCString()}; path=/`)
        if (isMounted) {
            window.location.href = "/"
        }
        setIsMounted(true)
    }, [selectedBatch, batches])

    const handleClick = (idx) => {
        setSelectedBatch(idx)
    }

    return (
        <div className={styles.batches_container}>
            <div className={styles.container_heading}>
                You have been assigned to the following batches. Please select one
                of them to continue.
            </div>
            <div className={styles.batches_list}>
                {
                    batches.map((batch, i) => {
                        return (
                            <div onClick={() => handleClick(i)} className={`${styles.batch_card} ${selectedBatch === i ? styles.active : ""}`}>
                                {batch.batch_name}
                            </div>
                        );
                    })
                }
            </div>
        </div >
    )
}

export default BatchSelect