import React, { useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '../../images/google.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    if (user) {
        console.log(user)
        navigate('/shop')
    }
    const handleCreateUser = event => {
        event.preventDefault()
        setError('')
        if (password !== confirmPassword) {
            setError('Password did not match')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <section>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="confirm-password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='link'>Already have account? <Link to='/login'>Login</Link></p>
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

export default SignUp;