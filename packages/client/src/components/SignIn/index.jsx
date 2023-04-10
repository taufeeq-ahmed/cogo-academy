import axios from 'axios';
import React, { useState } from 'react';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await axios.post('http://0.0.0.0:8080/users/login', { email, password }, {
            });

            if (response.status === 200) {
                const { token } = response.data;
                console.log("token", token);
                const expires = new Date(Date.now() + 60 * 60 * 1000); // Cookie expires in 1 hour
                document.cookie = `token=${token}; expires=${expires.toUTCString()}; path=/`;
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            console.error(err);
            setError('Something went wrong. Please try again later.');
        }

    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Sign In</button>
            </form>
            {error && <div>{error}</div>}
        </div>
    );
}

export default SignIn;
