import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../Firebase/context";
import { doCreateUserWithEmailAndPassword } from '../Firebase/firebase'
import styles from './SignUp.module.css'
import HermesLogo from '../../assets/HermesLogo.svg'
import SocialsIcons from '../SignIn/SocialsIcons';
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

function SignUp() {
    const navigate = useNavigate();

    const registerUserInConvex = useMutation(api.myFunctions.registerUser);

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
            const userCredential = await doCreateUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
    
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
        <div className={styles.signinuppage}>
            <img src={HermesLogo} className={styles.logo} alt="Hermes, communicate with your community"/>
        <form className={styles.signinpage} onSubmit={handleSignUp}>
            <div>
                {/* <label htmlFor="name">Name:</label> */}
                <input
                className={styles.textinput}
                    type="text"
                    id="name"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                {/* <label htmlFor="email">Email:</label> */}
                <input
                className={styles.textinput}
                    type="email"
                    id="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                {/* <label htmlFor="password">Password:</label> */}
                <input
                className={styles.textinput}
                    type="password"
                    id="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
               
            </div>
            <div>
                <button className={styles.inputbutton} type="submit">Sign Up</button>
            </div>
            <div className={styles.signinflow}>
                <span>Have an account?</span> 
                <Link to="/signin" style={{ textDecoration: 'none' }}>
                <span className={styles.signuplink}>Sign in now!</span>
                </Link>
                </div>
        </form>
        <SocialsIcons/>
        <div><span>©2024</span></div>

        </div>
    );
}

export default SignUp;
