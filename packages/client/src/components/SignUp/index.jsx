import axios from 'axios';
import instance from '../../utils/axios';
import styles from './styles.module.css'
import eye from '/assets/eye.svg'
import { useState } from 'react';
const SignUp = ({ token, data }) => {
    const server = import.meta.env.PUBLIC_SERVER_URL;
    const [formdata, setFormData] = useState({
        user_name: '',
        password: '',
        github_username: '',
        email: data
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await instance.post(`/accept_invite`,
                { body: { ...formdata, token } },
            );

            if (response.status === 200) {
                window.location.href = `/signin`;
            } else {
                const error = await response;
                throw new Error(error.message || 'Something went wrong');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    };
    return (
        <div className={styles.signup_container}>
            <div className={styles.heading}><p>Let's get started for free</p></div>
            <div className={styles.subheading}><p>create your account in one step</p></div>
            <form className={styles.fm} onSubmit={handleSubmit} id="testForm">
                <div className={styles.section}>
                    <label htmlFor="full-name">Full Name</label>
                    <input
                        type="text"
                        className={styles.text}
                        placeholder="Enter your Full Name"
                        name="user_name"
                        value={formdata.user_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.section}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className={styles.email}
                        id="email"
                        placeholder="Enter your Email "
                        value={data}
                        disabled
                    />
                </div>
                <div className={styles.section}>
                    <label for="password">Password</label>
                    <div className={styles.password_input}>
                        <input
                            className={styles.password}
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            value={formdata.password}
                            placeholder="Enter your password"
                        />
                        <button className={styles.toggle_password}>
                            <img src={eye} alt="Toggle Password Visibility" />
                        </button>
                    </div>
                </div>
                <div className={styles.section}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <div className={styles.password_input}>
                        <input
                            className={styles.password}
                            type="password"
                            placeholder="Confirm password"
                        />
                        <button className={styles.toggle_password}>
                            <img src={eye} alt="Toggle Password Visibility" />
                        </button>
                    </div>
                </div>
                <div className={styles.section}>
                    <label htmlFor="git-username">Git Username</label>
                    <input
                        type="text"
                        className={styles.text}
                        id="git-username"
                        name="github_username"
                        onChange={handleChange}
                        value={formdata.github_username}
                        placeholder="Enter your git username"
                    />
                </div>
                <div className={styles.btn} >
                    <button id="submit_btn" type="submit">Create Account</button>
                </div>
                <div className={styles.bottom}>
                    <span>already have an account?</span><a href="/signin">Log In</a>
                </div>
            </form>
        </div>
    )
};
export default SignUp;