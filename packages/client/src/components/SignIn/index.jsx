import React, { useState } from 'react';
import styles from './styles.module.css'; // Import CSS module styles
import instance from '../../utils/axios';
import eye from '/assets/eye.svg'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [passwordShown, setPasswordShown] = useState(false);
    const [formErrors, setFormErrors] = useState({});


    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
          }
        try {
            const response = await instance.post('/users/login',
                { email, password }
            );
            if (response.status === 200) {
                const { token } = await response.data;
                console.log('token', token);
                const expires = new Date(Date.now() + 60 * 60 * 1000); // Cookie expires in 1 hour
                document.cookie = `cogoacademytoken=${token}; expires=${expires.toUTCString()}; path=/`;
                window.location.href = '/'
                setFormErrors({});
            } else {
                setError(response.data);
                setFormErrors({});
            }
        }
        catch (err) {
            setError('Invalid Password or Email');
            setFormErrors({});
        }
        console.log(err);
    };
    const validateForm = () => {
        let errors = {};

        // Validate email field
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
        }

        // Validate password field
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        else if (password.length > 15) {
            errors.password = 'Password must be atmost 15 characters long';
        }

        return errors;
    };
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <p>Welcome Back!</p>
            </div>
            <div className={styles.sub_heading}>
                <p>Please enter your details</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.section}>
                    <label htmlFor="email" className={styles.label}>
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.email}
                    />
                    {formErrors.email && <div className={styles.error}>{formErrors.email}</div>}
                </div>
                <div className={styles.section}>
                    <label htmlFor="password" className={styles.label}>
                        Password:
                    </label>
                    <div className={styles.password_input}>
                        <input
                            type={passwordShown ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.password}
                        />
                        <button type="button" id="toggle_eye" className={styles.toggle_password} onClick={togglePassword}
                        ><img
                                src={eye}
                                alt="Toggle Password Visibility"
                            /></button
                        >
                    </div>
                    {formErrors.password && (
                        <div className={styles.error}>{formErrors.password}</div>
                    )}
                </div>
                <div className={styles.forgot_link}><a href="/forgotpassword"> Forgot Password?</a></div>
                <div className={styles.btn}>
                    <button type="submit" className={styles.submit}>
                        Sign In
                    </button>
                </div>
            </form>
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
}

export default SignIn;
