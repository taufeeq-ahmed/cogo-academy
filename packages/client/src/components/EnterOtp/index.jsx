import styles from './styles.module.css'
const EnterOtp=()=>{
    const handleKeyUp=(e)=>{
        const input=e.target;
        const mxlen=input.attributes.maxLength.value;
        const inputvalue=input.value;
        if(inputvalue.length>=mxlen)
        {
            const nextinput=input.nextElementSibling;
            if(nextinput)
            nextinput.focus();
        }
    }
    return (
        <div className={styles.container}>
        <div className={styles.heading}>
            <p>Reset your password</p>
        </div>
        <div className={styles.sub_heading}>
            <span className={styles.sub_heading_span}
                >Enter your email for the verification process,<br />
                we will send 6 digit code to your email
            </span>
        </div>
        <div className={styles.instruction}>
            <span>Please enter the otp sent to the xyz@gmail.com</span>
            <a href="/forgotpassword" id="edit"> edit</a>
        </div>
        <div className={styles.stylesotp}>
            <input type="text" id="ist" className={styles.digit} maxLength="1" onKeyUp={handleKeyUp}/>
            <input type="text" id="sec" className={styles.digit} maxLength="1" onKeyUp={handleKeyUp}/>
            <input type="text" id="third" className={styles.digit} maxLength="1" onKeyUp={handleKeyUp}/>
            <input type="text" id="fourth" className={styles.digit} maxLength="1" onKeyUp={handleKeyUp}/>
            <input type="text" id="fifth" className={styles.digit} maxLength="1" onKeyUp={handleKeyUp}/>
            <input type="text" id="sixth" className={styles.digit} maxLength="1" onKeyUp={handleKeyUp}/>
        </div>
        <div className={styles.btn}>
            <button type="submit" className={styles.submit}>Reset password</button>
        </div>
        <div className={styles.bottom}>
            <span>Don't want to reset password? </span><a href="">Log In</a>
        </div>
    </div>
    )
}
export default EnterOtp;