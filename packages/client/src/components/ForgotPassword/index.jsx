import { useForm } from 'react-hook-form';
import instance from '../../utils/axios';
import styles from './styles.module.css'
const ForgotPassword=()=>{

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await instance.post(`/forgot-password`, { data });

            if (response.status === 200) {
                alert("success")
            } else {
                const error = await response;
                throw new Error(error.message || 'Something went wrong');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
        <div >
            <p className={styles.heading}>Reset your password</p>
        </div>
        <div className={styles.sub_heading}>
            <p>
                Enter your email for the verification process,<br />
                we will send unique link to your email
            </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

      
        <div className={styles.section}>
            <label htmlFor="email">Email</label>
            <input 
            id='email'
            type="email" 
            className={styles.email}
            placeholder="Enter email"
            {...register("email", { required: true })}
             />
              {errors.email && <span className={styles.error}>This field is required</span>}
        </div>
        <div>
            <button type='submit' className={styles.sendcode_btn}> Send Link</button>
        </div>
        </form>
        <div className={styles.bottom}>
            <span>Don't want to reset password? </span><a href="/signin">Log In</a>
        </div>
    </div>
    )
}
export default ForgotPassword;