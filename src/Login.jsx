import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { doSignInWithEmailAndPassword } from './Firebase/firebase'
import { useAuth } from "./Firebase/context";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        doSignInWithEmailAndPassword(email, password)
        .then(() => {
          navigate('/');
        })
        .catch(error => { /* error handling */ });
    };

    const { currentUser } = useAuth()
    useEffect(() => {
        if (currentUser) {
            navigate("/");
        }
    }, [currentUser]);

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default Login;
