import React from 'react'
import Feedbar from '../../components/feedbar/feedbar'
import Leftbar from '../../components/leftbar/leftbar'
import Rightbar from '../../components/rightbar/rightbar'
import Topbar from '../../components/topbar/topbar'
import './home.css'
function Home(){
  return (

    <div>
<Topbar/>
<div className='homecontainer'>
       <Leftbar/>
       <Feedbar/>
       <Rightbar/>
       </div>
    </div>
  )
}

export default Home