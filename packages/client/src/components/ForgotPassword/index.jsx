import styles from './styles.module.css'
const ForgotPassword=()=>{
    return (
        <div className={styles.container}>
        <div >
            <p className={styles.heading}>Reset your password</p>
        </div>
        <div className={styles.sub_heading}>
            <p>
                Enter your email for the verification process,<br />
                we will send 6 digit code to your email
            </p>
        </div>
        <div className={styles.section}>
            <label htmlFor="">Email</label>
            <input type="email" className={styles.email} placeholder="XXXXXXXXXXXXX" />
        </div>
        <div>
            <button className={styles.sendcode_btn}> Send Code</button>
        </div>
        <div className={styles.bottom}>
            <span>Don't want to reset password? </span><a href="/signin">Log In</a>
        </div>
    </div>
    )
}
export default ForgotPassword;