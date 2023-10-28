import './feedbar.css'
import React from 'react'
import Share from '../share/share'
import Post from '../post/post'
import { Posts } from '../dummydates/dummydate'

export default function Feedbar() {
  return (
    <div className='feedbar'>
   <Share/>
   {Posts.map((p)=>(
 <Post key={p.id} post={p}/>
   ))}
  
  
      </div>
  )
}
