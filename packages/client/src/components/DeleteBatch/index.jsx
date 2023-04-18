import React from 'react'
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import instance from '../../utils/axios';
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
            <Modal isShowing={show} toggle={toggle} heading={'Delete'} >
                <h3>Are you Sure you want to delete {batch?.batch_name} ?</h3>
                <Button text='Delete' onClick={handleDelete} />
            </Modal>
        </div>
    )
}

export default DeleteBatch;
