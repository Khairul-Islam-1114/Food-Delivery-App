import React, { useState } from 'react';
import './LogInPopup.css';
import { assets } from '../../assets/assets';

const LogInPopup = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState('Sign Up')
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>

            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>

            <div className="login-popup-inputs">
                {currentState === 'Log In' ? <></> :
                
                <input type="text" placeholder='Your Name' required/>
                }
                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Password' required/>
            </div>
            <button>{currentState === 'Sign Up' ? 'Create Account' : 'Log In'}</button>

            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currentState === 'Sign Up' ? 
            <p>Already have an account? <span onClick={()=>setCurrentState('Log In')}>Login Here</span></p>
            :<p>Create a new account? <span onClick={()=>setCurrentState('Sign Up')}>Click Here</span></p>
            }

        </form>
    </div>
  )
}

export default LogInPopup