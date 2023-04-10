import styles from './styles.module.css'
import eye from '/assets/eye.svg'
const ResetPassword = () => {
    return (
        <div className={styles.container}>
        <div className={styles.heading}>
            <p>Reset password</p>
        </div>
        <div className={styles.sub_heading}>
            <p>Enter your new password</p>
        </div>
        <div>
            <div className={styles.section}>
                <label for="password">Password</label>
                <div className={styles.password_input}>
                    <input
                        className={styles.password}
                        type="password"
                        id="password"
                        placeholder="Enter your  new password"
                    />
                    <button id="toggle_eye" className={styles.toggle_password}
                        ><img
                            src={eye}
                            alt="Toggle Password Visibility"
                        /></button
                    >
                </div>
            </div>
            <div className={styles.section}>
                <label for="confirm-password">Confirm Password</label>
                <div className={styles.password_input}>
                    <input
                        className={styles.password}
                        type="password"
                        id="confirm_password"
                        placeholder="Confirm password"
                    />
                    <button id="confirm_toggle_eye" className={styles.toggle_password}
                        ><img
                            src={eye}
                            alt="Toggle Password Visibility"
                        /></button
                    >
                </div>
            </div>
            <div className={styles.btn}>
                <button type="submit" className={styles.submit}>Reset password</button>
            </div>
            <div className={styles.bottom}>
                <span>Don't want to reset password? </span><a href="">Log In</a>
            </div>
        </div>
    </div>
)
}
export default ResetPassword;