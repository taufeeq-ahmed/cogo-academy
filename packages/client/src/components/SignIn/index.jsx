import React, { useState } from 'react';
import styles from './styles.module.css'; // Import CSS module styles
import instance from '../../utils/axios';

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
                document.cookie = `token=${token}; expires=${expires.toUTCString()}; path=/`;
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
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label htmlFor="email" className={styles.label}>
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="password" className={styles.label}>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>
                    Sign In
                </button>
            </form>
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
}

export default SignIn;
