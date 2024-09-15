import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Firebase/context";
import { doSignInWithEmailAndPassword } from '../Firebase/firebase'
import styles from './SignIn.module.css';
import SocialIcons from './SocialIcons';

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
        <main className={styles.loginContainer}>
          <div className={styles.contentWrapper}>
            <div className={styles.logoContainer}>
              <div className={styles.logoWrapper} />
            </div>
            <div className={styles.mainContent}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06dec2b057490a426dcd6d42ad12a688b323d1c99db0d072e49413233ac324c2?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2" className={styles.logo} alt="Company logo" />
              <div className={styles.formContainer}>
                <form className={styles.formWrapper}>
                  <div className={styles.inputWrapper}>
                    <label htmlFor="email" className={styles.visuallyhidden}>Email</label>
                    <input type="email" id="email" className={styles.input} placeholder="Email" />
                    <label htmlFor="password" className={styles.visuallyhidden}>Password</label>
                    <input type="password" id="password" className={styles.input} placeholder="Password" />
                  </div>
                  <button type="submit" className={styles.loginButton}>Log in</button>
                </form>
                <p className={styles.signupText}>
                  <span>Don't have an account? </span>
                  <a href="#signup" style={{color: '#2d3641'}}>Sign up now!</a>
                </p>
              </div>
              <footer className={styles.footer}>
                <SocialIcons />
                <p className={styles.copyright}>©2024</p>
              </footer>
            </div>
          </div>
        </main>
    );
}

export default SignIn;
