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
            // courses: courses
        }
    });
    // const {
    //     fields,
    //     append,
    //     prepend,
    //     remove,
    //     swap,
    //     move,
    //     insert,
    //     replace
    // } = useFieldArray({
    //     control,
    //     name: "courses"
    // });


    const onSubmit = async (data) => {
        // const courses = data.courses.filter((c) => c.selected === true);
        // alert(JSON.stringify(data));
        await instance.post('batch',data);
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
            {/* {
                fields.map((item, index) => {
                    return (
                        <div className={styles.check_course}>
                            <input type='checkbox' value={item.value} {...register(`courses.${index}.selected`)} />
                            <span>{item.course_name}</span>
                        </div>
                    )
                })
            } */}
            <Button text='Submit' type='submit' btnStyle={{ marginTop: "10px" }} />

        </form>
    )
}

export default AddBatch



