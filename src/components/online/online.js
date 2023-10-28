import React from 'react'
import './online.css'
export default function Online({user}) {

  return (
    <div>
          <li className='rightbarfriends'>
          <div className='rightbarprofilecontainer'>
            <img src={user.profilepicture} alt='' className='rightbarprofileimage' />
              <span className='rightbaronline'></span>
          </div>
          <span className='onlineusername'>{user.username}</span>
          </li>
    </div>
  )
}
