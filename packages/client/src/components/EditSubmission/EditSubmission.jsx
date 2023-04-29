import InputBox from "../InputBox/InputBox";
import instance from '../../utils/axios'
import Button from '../Button/Button'
import styles from "./styles.module.css"
import { useForm } from "react-hook-form";

const EditSubmission = ({ submission }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            "submission_name": submission.submission_name,
            "submission_description": submission.submission_description
        }
    });


    const onSubmit = async (data) => {
        console.log(data)
        try {
            await instance.patch(`/submission/${submission.submission_id}`, data)
            // window.location.href = ('/admin/courses');
        } catch (err) {

        }
    }

    return (
        <form className={styles.edit_submission} onSubmit={handleSubmit(onSubmit)}>
            <p>Edit Submission</p>
            <div className={styles.box}>
                <label>Submission Name</label>
                <InputBox
                    placeholder={"Submission Name"}
                    style={{ fontSize: '16px', marginTop: "5px" }}
                    style_box={{ marginTop: "5px", marginBottom: "5px" }}
                    name="submission_name"
                    register={register}
                    registerQuery={"submission_name"}
                    required />
                <label>Submission Description</label>
                <InputBox
                    textarea
                    placeholder={"Submission Description"}
                    style={{ fontSize: '16px', marginTop: "5px" }}
                    style_box={{ marginTop: "5px", marginBottom: "5px" }}
                    name="submission_description"
                    register={register}
                    registerQuery={"submission_description"}
                    required />
            </div>
            <div className={styles.control_buttons}>
                <Button text='Edit Submission ' type='submit' />
            </div>
        </form>
    )
}
export default EditSubmission;