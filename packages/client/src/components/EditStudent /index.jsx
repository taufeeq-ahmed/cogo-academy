import styles from "./styles.module.css"
import Button from '../Button/Button'
import { useForm, useFieldArray } from 'react-hook-form';
import instance from '../../utils/axios'
import Modal from '../Modal/Modal';


const EditStudent = ({ userData, show, toggle }) => {

    console.log(userData)


    const batchIdList = batches.map((b) => {
        return b.batch_id
    })


    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            batches: allBatches.map((b) => {
                if (batchIdList.includes(b.batch_id)) {
                    return {
                        ...b,
                        selected: true
                    }
                }
                else {
                    return {
                        ...b,
                        selected: false
                    }
                }
            })
        }
    });
    const {
        fields
    } = useFieldArray({
        control,
        name: "batches"
    });


    const onSubmit = async (data) => {

        const batches = data.batches.map((b) => {
            if (b.selected === true) {
                return {
                    batch_id: b.batch_id
                }
            }
            return null
        }).filter(b => b !== null);

        await instance.post(`/user/${userData.user_id}/update_batches`, { batches })
            .then(() => {
                alert("Updated Batches")
                window.location.href = window.location.pathname
            })
        // await instance.post(`/batch/${batch.batch_id}/add_courses`, data);
    }


    return (
        <Modal isShowing={show} toggle={toggle} heading={'Edit'} handleSubmit={handleSubmit(onSubmit)} submitText="Submit" >
            <form>
                <div className={styles.check_batches}>
                    {
                        fields.map((item, index) => {
                            return (
                                <div className={styles.check_batches}>
                                    <input type='checkbox' value={item.value} {...register(`batches.${index}.selected`)} />
                                    <span>{item.batch_name}</span>
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

export default EditStudent;



