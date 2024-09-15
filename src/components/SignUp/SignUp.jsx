import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../Firebase/context";
import { doCreateUserWithEmailAndPassword } from '../Firebase/firebase'
import styles from './SignUp.module.css'
import HermesLogo from '../../assets/HermesLogo.svg'
import SocialsIcons from '../SignIn/SocialsIcons';

function SignUp() {

    const navigate = useNavigate()

    const { currentUser } = useAuth()
    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault();
        doCreateUserWithEmailAndPassword(email, password)
        .then(() => {      
            setName('');
            setEmail('');
            setPassword('');
            navigate('/');
        }).catch(error => {/* error handling */ });
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
            <span>Warning: Password must be at least 6 characters</span>
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
