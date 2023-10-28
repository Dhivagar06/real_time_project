import React from 'react'
import './login.css'
export default function Login() {
  return (
    <div className='login'>
        <div className='loginwrapper'>
            <div className='loginleft'>
                <h3 className='loginlogo'>Web Page</h3>
                <span className='logindesc'>
                    Connect With Friends and the World Around You On Lamasocial.
                </span>
            </div>
            <div className='loginright'>
                <div className='loginbox'>
                    <input placeholder='Email' className='logininput'/>
                    <input placeholder='Psaaword' className='logininput'/>
                    <button className='loginbutton' >Log In</button>
                    <span className='loginforget'>Forgot Password?</span>
                    <button className='loginregisterbutton' >
                        Create a New Account  
                    </button>
                </div>
            </div>
        </div>
</div>
    
  )
}
