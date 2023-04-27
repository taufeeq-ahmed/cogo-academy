import React, { useEffect } from 'react'
import InputBox from '../InputBox/InputBox'
import { useForm } from 'react-hook-form';
import instance from '../../utils/axios'
import Modal from '../Modal/Modal';



const AddBatch = ({ show, toggle }) => {

    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            batch_name: '',
        }
    });


    const onSubmit = async (data) => {
        await instance.post('batch', data)
            .then(() => {
                alert("Created the batch")
                window.location.href = window.location.pathname
            })
    }


    return (
        <Modal isShowing={show} toggle={toggle} heading={'Create Batch'} handleSubmit={handleSubmit(onSubmit)} submitText="Submit" >
            <form>
                <label htmlFor="batch_name">Batch Name</label>
                <InputBox
                    placeholder={"Batch Name"}
                    style={{ fontSize: '16px' }}
                    name="batch_name"
                    register={register}
                    registerQuery={"batch_name"}
                />
                {/* <Button text='Submit' type='submit' btnStyle={{ marginTop: "10px" }} /> */}
            </form>
        </Modal>
    )
}

export default AddBatch



