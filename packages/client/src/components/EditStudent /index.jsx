import styles from "./styles.module.css"
import Button from '../Button/Button'
import { useForm, useFieldArray } from 'react-hook-form';
import instance from '../../utils/axios'
import Modal from '../Modal/Modal';


const EditStudent = ({ userData, show, toggle }) => {


    const { email, user_name ,github_username,isAdmin} = userData;


    const { register, handleSubmit ,formState: { errors } } = useForm({
        defaultValues: {
            email: email,
            user_name:user_name,
            github_username:github_username,
            isAdmin:isAdmin
        }
    });



    const onSubmit = async (data) => {
        data.isAdmin = (data.isAdmin.toLowerCase() === 'true');
        await instance.patch(`/user/${userData.user_id}`, { new_data:data })
        .then(() => {
            alert("Updated users")
            window.location.href = window.location.pathname
        })
    }


    return (
        <Modal isShowing={show} toggle={toggle} heading={'Edit'} handleSubmit={handleSubmit(onSubmit)} submitText="Submit" >
           <form className={styles.form} id="testForm">
                <div className={styles.section}>
                    <label htmlFor="full-name">Full Name</label>
                    <input
                        type="text"
                        className={styles.text}
                        placeholder="Enter your Full Name"
                        name="user_name"
                        {...register("user_name", { required: true })}
                    />
                    {errors.user_name && <span className={styles.error}>This field is required</span>}
                </div>
                <div className={styles.section}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className={styles.email}
                        id="email"
                        placeholder="Enter your Email "
                        {...register("email", { required: true })}
                        disabled
                    />
                </div>
                <div className={styles.section}>
                    <label htmlFor="github_username">Git Username</label>
                    <input
                        type="text"
                        className={styles.email}
                        id="github_username"
                        placeholder="Enter your Git Username "
                        {...register("github_username", { required: true })}
                    />
                </div>
                <div className={styles.section}>
                    <label htmlFor="isAdmin">Is Admin</label>
                    <input
                        className={styles.email}
                        id="isAdmin"
                        {...register("isAdmin")}
                    />
                </div>
            </form>
        </Modal >
    )
}

export default EditStudent;



