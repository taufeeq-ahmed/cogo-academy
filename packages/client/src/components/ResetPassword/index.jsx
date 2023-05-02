import styles from './styles.module.css'
import instance from '../../utils/axios';
import eye from '/assets/eye.svg'
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ResetPassword = ({authtoken}) => {
    const [authrization,setAuthorization]=useState()
    const [showpass1, setshowpass1] = useState(false)
    const [showpass2, setshowpass2] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(() => {
        const call=async ()=>{
            
            const res = await instance.get(`/forgot-password/${authtoken}`);

            setAuthorization(res.data)

            if(!res.data){
                alert("invalid link")
                window.location.href = `/signin`;
            }
        }
    call()
    }, [authtoken])
const toggle1=()=>{
    setshowpass1(!showpass1)
}
const toggle2=()=>{
    setshowpass2(!showpass2)
}
    const onSubmit = async (data) => {
        if(data.password!==data.confirm_password){
            alert("password not match")
        }
        const newdata={email:authrization.email,password:data.password}
        try {
            const response = await instance.post(`/reset-password`, { data:newdata });

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
            <div className={styles.heading}>
                <p>Reset password</p>
            </div>
            <div className={styles.sub_heading}>
                <p>Enter your new password</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className={styles.section}>
                    <label for="password">Password</label>
                    <div className={styles.password_input}>
                        <input
                            className={styles.password}
                            type={showpass1 ? "text" : "password"}
                            id="password"
                            placeholder="Enter your  new password"
                            {...register("password", { required: true })}
                            
                        />
                        <button id="toggle_eye" className={styles.toggle_password}
                           onClick={toggle1}   type="button"><img
                                src={eye}
                                alt="Toggle Password Visibility"
                            />
                        </button>
                    </div>
                </div>
                <div className={styles.section}>
                    <label for="confirm-password">Confirm Password</label>
                    <div className={styles.password_input}>
                        <input
                            className={styles.password}
                            type={showpass2 ? "text" : "password"}
                            id="confirm_password"
                            placeholder="Confirm password"
                            {...register("confirm_password", { required: true })}
                        />
                        <button id="confirm_toggle_eye" className={styles.toggle_password}
                           onClick={toggle2} 
                           type="button"><img
                                src={eye}
                                alt="Toggle Password Visibility"
                            />
                        </button>
                    </div>
                </div>
                <div className={styles.btn}>
                    <button type="submit"  className={styles.submit}>Reset password</button>
                </div>
                <div className={styles.bottom}>
                    <span>Don't want to reset password? </span><a href="/signin">Log In</a>
                </div>

            </div>
            </form>
        </div>
        )
}
export default ResetPassword;