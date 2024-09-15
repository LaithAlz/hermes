import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Firebase/context";
import { doSignInWithEmailAndPassword } from '../Firebase/firebase'

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

export default SignIn;