import React from 'react'
import './Login.css'
import IMG from '../images/logo-shop.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../store/user-slice'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch (userActions.login());
    };

    return(
        <div className='auth-container'>
            <div className='welcome-container'>
                <h1>Login here Buddy</h1>
                <h2>Welcome to <br/>Shop Weh</h2>
                <br/>
                <img className='shop-logo-login' src={IMG} alt='' />
            </div>
            <div>
                <form >
                    <div className='form-container'>
                        <label htmlFor='email'>Email</label>
                        <input onChange = {e => setEmail(e.target.value)} placeholder='Please enter your email' type='email' name='email' id='email' value={email}/>
                    </div>
                    <div className='form-container'>
                        <label htmlFor='password'>Password</label>
                        <input onChange = {e => setPassword(e.target.value)} placeholder='Please enter your password' type='password' name='password' id='password' value={password} />
                    </div>
                    <button type='submit' className='log-in-btn' onClick={handleLogin}>Log in</button>
                </form>
                
            </div>
            
            
        </div>
    )
}

export default Login;