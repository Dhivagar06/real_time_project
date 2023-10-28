import React from 'react'
import './share.css'
export default function Share() {
  return (
    <div className='share'>
         <div className='sharewrapper'>
      <div className='sharetop'>
      <img className='profileimage' src='/assist/2.jpeg' alt='' />
      <input placeholder="what's your mind safak?" className='shareinput' />
      </div>
  
    <hr className='sharehr' />
    <div className='bottom'>
      <div className='shareoptions'>
      <div className='shareoption'>
      <i class="bi bi-film shareicon tomato" ></i>
        <span className='shareoptiontext '>photo or video </span>
      </div>

      <div className='shareoption'>
      <i class="bi bi-tag-fill blue"></i>
        <span className='shareoptiontext'>Tag </span>
      </div>

      <div className='shareoption' >
      <i class="bi bi-geo-alt-fill green" ></i>
        <span className='shareoptiontext'>Location </span>
      </div>

      <div className='shareoption'>
      <i class="bi bi-emoji-laughing-fill golden"/>
        <span className='shareoptiontext'>Feelings </span>
      </div>
      <button className='sharebutton'>Share</button>
      </div>
    
      </div>
    </div>
    </div>
  )
}
