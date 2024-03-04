import React,{useState} from 'react'
import Login from './Login';
import Signup from './Signup';
import './Auth.css'


const Auth = () => {
  const [active,setActive] = useState('login');
  const handleChange = ( ) =>{
    setActive(active==='login' ? 'signup' : 'login')
  };

  return (
    
    <div>
        <div>
            {active === 'login' ? <Login/> : <Signup/>}
        </div>
        <div>
            {active === 'login' ? (
                <div className='auth-bot-box'>
                     Don't have an account?{' '}
                    <button className='auth-bot-btn' onClick={handleChange}>Sign up</button>
                </div>
            ) : (
                < div className='auth-bot-box'>
                    Have an account?{' '}
                    <button className='auth-bot-btn' onClick={handleChange}>Log in</button>
                </div>
            )}
        </div>
    </div>
  )
}

export default Auth