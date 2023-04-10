import React, { useState } from 'react';
import styles from './styles.module.css'; // Import CSS module styles
import instance from '../../utils/axios';
import eye from '/assets/eye.svg'
function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await instance.post('/users/login',
                { email, password }
            );

            if (response.status === 200) {
                const { token } = await response.data;
                console.log('token', token);
                const expires = new Date(Date.now() + 60 * 60 * 1000); // Cookie expires in 1 hour
                document.cookie = `cogoacademytoken=${token}; expires=${expires.toUTCString()}; path=/`;
                window.location = '/'
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            console.error(err);
            setError('Something went wrong. Please try again later.');
        }
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
                </div>
                <div className={styles.section}>
                    <label htmlFor="password" className={styles.label}>
                        Password:
                    </label>
                    <div className={styles.password_input}>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.password}
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
