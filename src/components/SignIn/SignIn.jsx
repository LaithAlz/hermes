import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../Firebase/context";
import { doSignInWithEmailAndPassword } from '../Firebase/firebase'
import styles from './SignIn.module.css'
import HermesLogo from '../../assets/HermesLogo.svg'
import SocialsIcons from './SocialsIcons';

function SignIn() {

    const navigate = useNavigate()

    const { currentUser } = useAuth()
    
    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = event => {
        event.preventDefault()
        doSignInWithEmailAndPassword(email, password)
        .then(() => {
          navigate('/')
        })
        .catch(error => { /* error handling */ })
    }

    return (
        <div className={styles.signinuppage}>
            <img src={HermesLogo} className={styles.logo} alt="Hermes, communicate with your community"/>
        <form className={styles.signinpage} onSubmit={handleLogin}>
            <div>
                {/* <label htmlFor="email">Email:</label> */}
                <input
                className={styles.textinput}
                    type="email"
                    id="email"
                    placeholder="Email"
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
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <button className={styles.inputbutton} type="submit">Login</button>
            </div>
            <div className={styles.signinflow}>
                <span>Don’t have an account? </span> 
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                <span className={styles.signuplink}>Sign up now!</span>
                </Link>
            </div>
            
        </form>
        <SocialsIcons/>
        <div><span>©2024</span></div>
        </div>
    );
}

export default SignIn;