import React, { useState } from 'react'
import './post.css'
import {  user } from '../dummydates/dummydate'

export default function Post({post}) {
const [like,setlike]=useState(post.like);
const [isliketed,setisliketed]=useState(false)

const likehandler=()=>{
    setlike(isliketed ? like-1 : like+1)
    setisliketed(!isliketed)
}
  return (
    <div className='post'>
    <div className='postwrapper'>
        <div className='posttop'>
        <div className='topleft'>
            {/* once start check this */}
            <img src={user.filter((u) => u.id === post?.useid)[0].profilepicture}  

            className='postprofile'
             alt='Profile Picture'
             />
            <span className='usename'>{user.filter((u)=>u.id === post?.useid)[0].username}</span>
            <span className='usedate'>{post.date}</span>
        </div>
            <div className='topright'>
            <i class="bi bi-three-dots-vertical"/>
            </div>
        </div>
         {/* center */}
        <div className='postcenter'>
            <span className='posttext'>{post?.desc} </span>
            <img src={post.photo} alt='' className='postimage'/>
        </div>
        <div className='postbottom'>
            <div className='bottomleft'>   
                 <img src='/assist/like.png' alt='' onClick={likehandler}  className='posticons'/>
                 <img src='/assist/heart.png' alt='' onClick={likehandler}  className='posticons'/>
                 <span className='postlikecount'>{like}  people like it</span>
            </div>
            <div className='bottomright'>
                 <span className='postcomment'>{post.comment}  Comments</span>
            </div>
        </div> 

    </div>
    </div>
  )
}
