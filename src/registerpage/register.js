import React from 'react'
import './register.css'
export default function Register() {
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
                <input placeholder='Username' className='logininput'/>
                    <input placeholder='Email' className='logininput'/>
                    <input placeholder='Psaaword' className='logininput'/>
                    <input placeholder='Confirm Password' className='logininput'/>
                    <button className='loginbutton' >Sign Up</button>
                    <button className='loginregisterbutton' >
                       Log into Account  
                    </button>
                </div>
            </div>
        </div>
</div>
    
  )
}
