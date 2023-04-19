import React, { useEffect } from 'react'
import styles from "./styles.module.css"
import Button from '../Button/Button'
import InputBox from '../InputBox/InputBox'
import { useForm, useFieldArray } from 'react-hook-form';
import instance from '../../utils/axios'



const AddBatch = ({ courses }) => {

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="batch_name">Batch Name</label>
            <InputBox
                placeholder={"Batch Name"}
                style={{ fontSize: '16px' }}
                name="batch_name"
                register={register}
                registerQuery={"batch_name"}
            />
            <Button text='Submit' type='submit' btnStyle={{ marginTop: "10px" }} />

        </form>
    )
}

export default AddBatch



