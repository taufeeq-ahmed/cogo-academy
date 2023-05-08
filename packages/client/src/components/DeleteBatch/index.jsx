import React from 'react'
import Modal from '../Modal/Modal';
import instance from '../../utils/axios';
import styles from "./styles.module.css"

const DeleteBatch = ({ batch, show, toggle }) => {

    const handleDelete = () => {
        instance.delete(`/batch/${batch.batch_id}`)
            .then(() => {
                alert("Deleted the Batch")
                window.location.href = window.location.pathname
            })
    }

    return (
        <div>
            <Modal isShowing={show} toggle={toggle} heading={'Delete'} handleSubmit={handleDelete} submitText='Delete' >
                <p style={{ margin: 0 }}>Are you sure you want to delete {batch?.batch_name} ?</p>
            </Modal>
        </div>
    )
}

export default DeleteBatch;
