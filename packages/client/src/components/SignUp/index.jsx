import axios from 'axios';
import instance from '../../utils/axios';
import styles from './styles.module.css'
import eye from '/assets/eye.svg'
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const SignUp = ({ userData }) => {
    useEffect(() => {
        alert(JSON.stringify(userData))
    }, [])
    const { email, batches } = userData;

    const server = import.meta.env.PUBLIC_SERVER_URL;
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            email: email,
            batches: batches
        }
    });
    const onSubmit = async (formData) => {
        formData.email = email;
        try {
            const response = await instance.post(`/accept_invite`,
                { body: { ...formData, token } },
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
    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }
    const handleShowConfirmPassword = (e) => {
        e.preventDefault();
        setShowConfirmPassword(!showConfirmPassword);
    }
    return (
        <div className={styles.signup_container}>
            <div className={styles.heading}><p>Let's get started for free</p></div>
            <div className={styles.subheading}><p>create your account in one step</p></div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} id="testForm">
                <div className={styles.section}>
                    <label htmlFor="full-name">Full Name</label>
                    <input
                        type="text"
                        className={styles.text}
                        placeholder="Enter your Full Name"
                        name="user_name"
                        {...register("user_name", { required: true })}
                    />
                    {errors.user_name && <span className={styles.error}>This field is required</span>}
                </div>
                <div className={styles.section}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className={styles.email}
                        id="email"
                        placeholder="Enter your Email "
                        value={email}
                        disabled
                    />
                </div>
                <div className={styles.section}>
                    <label htmlFor="password">Password</label>
                    <div className={styles.password_input}>
                        <input
                            className={styles.password}
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            {...register("password", { required: true, minLength: 8, maxLength: 15 })}
                            placeholder="Enter your password"
                        />
                        <button type="button" className={styles.toggle_password} onClick={handleShowPassword}>
                            <img src={eye} alt="Toggle Password Visibility" />
                        </button>
                    </div>
                    {errors.password && <span className={styles.error}>Password lenght should be 8-15 letter</span>}
                </div>
                <div className={styles.section}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <div className={styles.password_input}>
                        <input
                            className={styles.password}
                            type={showConfirmPassword ? "text" : "password"}
                            {...register("confirm_password", {
                                required: true,
                                validate: (value) => value === watch('password')
                            })}
                            placeholder="Confirm password"
                        />
                        <button type="button" className={styles.toggle_password} onClick={handleShowConfirmPassword}>
                            <img src={eye} alt="Toggle Password Visibility" />
                        </button>
                    </div>
                    {errors.confirm_password && errors.confirm_password.type === "required" && (
                        <span className={styles.error}>This field is required</span>)}
                    {errors.confirm_password && errors.confirm_password.type === "validate" && (
                        <span className={styles.error}>Passwords do not match</span>
                    )}
                </div>
                <div className={styles.section}>
                    <label htmlFor="git-username">Git Username</label>
                    <input
                        type="text"
                        className={styles.text}
                        id="git-username"
                        name="github_username"
                        placeholder="Enter your git username"
                        {...register("github_username", { required: true })}
                    />
                    {errors.github_username && <span className={styles.error}>This field is required</span>}
                </div>
                <div className={styles.track}>
                    <Dropdown  options={[{ label: "batch1", value: 1 }, { label: "batch2", value: 2 }, { label: "batch3", value: 3 }]} placeHolder='Track' styles={{ width: '100%', border: 'none', fontSize: "13.33px" }} />
                </div>
                <div className={styles.batch}>
                    <Dropdown isMulti options={[{ label: "batch1", value: 1 }, { label: "batch2", value: 2 }, { label: "batch3", value: 3 }]} placeHolder='Batchs' styles={{ width: '100%', border: 'none', fontSize: "13.33px" }} />
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
