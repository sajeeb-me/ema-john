import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '../../images/google.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/shop')
    }

    const handleLogIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <section>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleLogIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p style={{ color: 'red' }}>{error?.message}</p>
                <p>{loading && 'loading...'}</p>
                <p className='link'>New to Ema-Jhon? <Link to='/signup'>Create an account</Link></p>
                <div className='or'>
                    <div className='line'></div>
                    <p>or</p>
                    <div className='line'></div>
                </div>
                <div>
                    <button className='google-btn'>
                        <img className='google-icon' src={GoogleIcon} alt="" />
                        <p>Continue With Google</p>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Login;