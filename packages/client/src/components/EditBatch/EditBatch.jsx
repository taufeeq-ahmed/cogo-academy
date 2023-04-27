import React, { useEffect } from 'react'
import styles from "./styles.module.css"
import Button from '../Button/Button'
import InputBox from '../InputBox/InputBox'
import { useForm, useFieldArray } from 'react-hook-form';
import instance from '../../utils/axios'
import Modal from '../Modal/Modal';


const EditBatch = ({ allCourses, show, toggle, batch }) => {

    console.log("sadosapj", batch)

    const batchCoursesIds = batch.courses.map((b) => {
        return b.course_id
    });
    let prefillCourses = []
    prefillCourses = allCourses.map((course) => {
        if (batchCoursesIds.includes(course.course_id)) {
            course.selected = true;
        }
        else {
            course.selected = false
        }
        return course;
    })



    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            batch_name: batch.batch_name,
            courses: prefillCourses
        }
    });
    const {
        fields
    } = useFieldArray({
        control,
        name: "courses"
    });


    const onSubmit = async (data) => {

        const courses = data.courses.map((c) => {
            if (c.selected === true) {
                return {
                    course_id: c.course_id
                }
            }
            return null
        }).filter(c => c !== null);
        await instance.post(`/batch/${batch.batch_id}/add_courses`, { new_data: { batch_name: data.batch_name, courses: courses } })
            .then(() => {
                alert("Edited the Batch")
                window.location.href = window.location.pathname
            })
        // await instance.post(`/batch/${batch.batch_id}/add_courses`, data);
    }


    return (
        <Modal isShowing={show} toggle={toggle} heading={'Edit'} handleSubmit={handleSubmit(onSubmit)} submitText='Submit' >
            <form>
                <label htmlFor="batch_name">Batch Name</label>
                <InputBox
                    placeholder={"Batch Name"}
                    style={{ fontSize: '16px' }}
                    name="batch_name"
                    register={register}
                    registerQuery={"batch_name"}
                />
                <div className={styles.check_courses}>
                    {
                        fields.map((item, index) => {
                            return (
                                <div className={styles.check_course}>
                                    <input type='checkbox' value={item.value} {...register(`courses.${index}.selected`)} />
                                    <span>{item.course_name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <Button text='Submit' type='submit' btnStyle={{ marginTop: "10px" }} /> */}
            </form>
        </Modal >
    )
}

export default EditBatch;



