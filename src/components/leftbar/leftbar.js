import React from 'react'
import './leftbar.css'
import {  user } from '../dummydates/dummydate'
import Closefrd from '../../closefriend/closefrd';

 function Leftbar(){
  return (
    <div className='leftbar'>
      <div className='leftwapper'>
        <ul className='leftlisttag'>
{/* 1 */}
          <li className='leftlistitems'>
          <i class="bi bi-wifi listiconitems"></i>
            <span className='listicontext'>Feed</span>          
        </li>

{/* 2 */}
          <li className='leftlistitems'>
          <i class="bi bi-chat-left-dots-fill listiconitems"></i>
            <span className='listicontext'>Chats</span>          
       </li>
{/* 3 */}
          <li className='leftlistitems'>
          <i class="bi bi-play-circle-fill listiconitems"></i>
            <span className='listicontext'>Videos</span>          
          </li>

{/* 4 */}
          <li className='leftlistitems'>
          <i class="bi bi-people-fill listiconitems"></i>
            <span className='listicontext'>Groups</span>          
          </li>
{/* 5 */}
          
          <li className='leftlistitems'>
          <i class="bi bi-bookmarks-fill listiconitems"></i>
            <span className='listicontext'>BookMarks</span>          
          </li>

  {/* 6*/}
          <li className='leftlistitems'>
          <i class="bi bi-question-circle listiconitems"></i>
            <span className='listicontext'>Questions</span>          
          </li>

{/*7  */}
          <li className='leftlistitems'>
          <i class="bi bi-briefcase listiconitems"></i>
            <span className='listicontext'>Jobs</span>          
          </li>

{/* 8 */}
          <li className='leftlistitems'>
          <i class="bi bi-calendar-event listiconitems"></i>
            <span className='listicontext'>Events</span>          
          </li>

          {/*  9*/}
          <li className='leftlistitems'>
          <i class="bi bi-mortarboard-fill listiconitems"></i>
            <span className='listicontext'>Free Courses</span>          
         </li>

        </ul>
        <button className='leftbarbutton'>Show More</button>
        <hr className='leftbarhr'/>
        <ul className='leftfriendlist'>
            {user.map((u)=>(
              <Closefrd key={u.id} users={u}/>
            ))}
        </ul>
      </div>
      </div>
  )
}
export default Leftbar;