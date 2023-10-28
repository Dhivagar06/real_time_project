import React from 'react'
import Feedbar from '../components/feedbar/feedbar'
import Leftbar from '../components/leftbar/leftbar'
import Rightbar from '../components/rightbar/rightbar'
import Topbar from '../components/topbar/topbar'
import './profile.css'
export default function Profile() {
  return (
    <div>
    <Topbar/>
    <div className='profile'>
    <Leftbar/>
    <div className='profileright'>
        <div className='profilerighttop'>
          <div className='profilecover'>
          <img src='assist/natual.jpeg' alt='' className='profilecoverimg' />
          <img src='assist/farmer.jpeg' alt='' className='profileuserimg' />
          </div>
          <div className='profileinfo'>
               <h4 className='profileinfoname'>FARMER</h4>
               <span className='profileinfodesc'>Poewer Of Earth</span>
          </div>
        </div>
        <div className='profilerightbottom'>
        <Feedbar/>
           <Rightbar profile/>
        </div>
        </div>
        </div>
        </div>
  )
}
