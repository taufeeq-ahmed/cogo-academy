import styles from "./styles.module.css"
import Button from '../Button/Button'
import { useForm, useFieldArray } from 'react-hook-form';
import instance from '../../utils/axios'
import Modal from '../Modal/Modal';


const EditBatchStudent = ({ userData, batches, allBatches, show, toggle }) => {

    console.log("--s-d-asd-asd-sa-dsa-d-asd")
    console.log(batches)
    console.log(allBatches)


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
        alert(JSON.stringify(batches));

        await instance.post(`/user/${userData.user_id}/update_batches`, { batches });
        // await instance.post(`/batch/${batch.batch_id}/add_courses`, data);
    }


    return (
        <Modal isShowing={show} toggle={toggle} heading={'Edit'} >
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <Button text='Submit' type='submit' btnStyle={{ marginTop: "10px" }} />
            </form>
        </Modal >
    )
}

export default EditBatchStudent;



