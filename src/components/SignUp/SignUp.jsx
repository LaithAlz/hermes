import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Firebase/context";
import { doCreateUserWithEmailAndPassword } from '../Firebase/firebase';
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

function SignUp() {
    const navigate = useNavigate();

    // Convex mutation to register user in Convex
    const registerUserInConvex = useMutation(api.myFunctions.registerUser);

    // Check if user is already logged in
    const { currentUser } = useAuth();
    useEffect(() => {
        if (currentUser) {
            navigate('/');
        }
    }, [currentUser]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            // Sign up user with Firebase Authentication
            const userCredential = await doCreateUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
    
            // Register the user in Convex with name and tokenIdentifier
            await registerUserInConvex({
                name: name,  // Pass the name that the user inputs
                email: user.email,
                tokenIdentifier: user.uid, // Use uid as tokenIdentifier
            });
    
            setName('');
            setEmail('');
            setPassword('');
            navigate('/');
        } catch (error) {
            console.error("Error during sign-up:", error);
        }
    };
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
