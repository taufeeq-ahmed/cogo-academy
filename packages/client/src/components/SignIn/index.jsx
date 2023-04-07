import styles from './styles.module.css'
import eye from '/assets/eye.svg'
import { useEffect, useState } from 'react';
import axios from 'axios'
const SignIn=()=>{
    return (
        <div className={styles.signin_container}>
        <div className={styles.heading}>
            <p>Welcome Back!</p>
        </div>
        <div className={styles.sub_heading}>
            <p>Please enter your details</p>
        </div>
        <form action="" method="post">
            <div>
                <div className={styles.section}>
                    <label htmlFor="">Email</label>
                    <input type="email" className={styles.email} placeholder="Enter your email" required/>
                </div>
                <div className={styles.section}>
                    <label for="">Password</label>
                    <div className={styles.password_input}>
                        <input
                            className={styles.password}
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                        />
                        <button id="toggle_eye" className={styles.toggle_password}
                            ><img
                                src={eye}
                                alt="Toggle Password Visibility"
                            /></button
                        >
                    </div>
                </div>
                <div className={styles.forgot_link}><a href="/forgotpassword"> Forgot Password?</a></div>
                <div className={styles.btn}>
                    <button type="submit" className={styles.submit}>Login</button>
                </div>
                <div className={styles.bottom}>
                    <span>Don't have an account? </span><a href="/signup">Register Now</a>
                </div>
            </div>
        </form>
    </div>
    )
};
export default SignIn;