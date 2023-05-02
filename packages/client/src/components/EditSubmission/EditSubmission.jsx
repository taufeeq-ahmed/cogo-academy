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
            window.location.href = ('/admin/courses');
        } catch (err) {

        }
    }

    const handleDeleteSubmission = async () => {
        const cnf = window.confirm("are you sure to delete")
        if (cnf) {
            const response = await instance.delete(`/submission/${submission.submission_id}`)
            if (response.status === 200)
                window.location.href = `/admin/courses`
            else {
                alert("Something went wrong");
            }
        }
    }

    return (
        <form className={styles.edit_submission} onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>Edit Submission
                <Button
                    btnType="secondary"
                    text="Delete Section"
                    onClick={handleDeleteSubmission}
                /></div>
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
                <label style={{ marginTop: "20px" }}>Submission Description</label>
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