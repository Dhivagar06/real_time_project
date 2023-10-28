import React from 'react'
import './closefrd.css'
export default function Closefrd({users}) {
  return (
    <div>
  <li className='leftfriend'>
          <img className='friendimage' src={users.profilepicture} alt='' />
          <span className='friendname'>{users.username}</span>
         </li>
    </div>
  )
}
