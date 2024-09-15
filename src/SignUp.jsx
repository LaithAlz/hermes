import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from './Firebase/firebase'
import { useAuth } from "./Firebase/context";

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        doCreateUserWithEmailAndPassword(email, password)
        .then(async authUser => {      
            setName('');
            setEmail('');
            setPassword('');
            navigate("/");
        }).catch(error => {/* error handling */ });
    };


    const { currentUser } = useAuth()
    useEffect(() => {
        if (currentUser) {
            navigate("/");
        }
    }, [currentUser]);

    return (
        <form onSubmit={handleSignUp}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
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
                <button type="submit">Sign Up</button>
            </div>
        </form>
    );
}

export default SignUp;
