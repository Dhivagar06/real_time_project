import './rightbar.css'
import {  user } from '../dummydates/dummydate'
import Online from '../online/online'

export default function Rightbar({profile}) {
  const Homerightbar=()=>{
    return(
      <>
       <div className='birthdaycontainer'>
          <img src='/assist/gift.png' alt='' className='brithdayimage'/>
          <span className='birthadaytext'>
            <b>polo foster</b>and<b>other friends </b> have a birthday today
          </span>
        </div>
        <img src='assist/ad.png' alt='' className='rightbarad'/>
        <h4 className='rightbartitle'>Online Friends</h4>
        <ul className='rightbarfriendslist'>
        {user.map((u)=>(
          <Online key={u.id} user={u}/>
        ))}
       
        </ul>
      </>
    )
  }
 
const Profilerightbar=()=>{
  return(
    <>
    <h1 className='rightbartitle'>User information</h1>
    <div className='rightbarinfo'>
      <div className='rightbarinfoitem'>
      <span className='rightbarinfokey'>City:</span>
        <span className='rightbarinfovalue'>Ramanathpuram</span>
      </div>


      <div className='rightbarinfoitem'>
      <span className='rightbarinfokey'>Form:</span>
        <span className='rightbarinfovalue'>Paramakudi</span>
      </div>

      <div className='rightbarinfoitem'>
      <span className='rightbarinfokey'>RelationShip:</span>
        <span className='rightbarinfovalue'>Single</span>
      </div>
    </div>

    <h1 className='rightbartitle'>User friends</h1>
    <div className='rightbarfollowings'>
      <div className='rightbarfollowing'>
        <img src='assist/5.jpeg' alt='' className='rightbarfollowingimg'/>
        <span className='rightbarfollowingusername'>dhivagar</span>
      </div>

      <div className='rightbarfollowing'>
        <img src='assist/5.jpeg' alt='' className='rightbarfollowingimg'/>
        <span className='rightbarfollowingusername'>dhivagar</span>
      </div>

      <div className='rightbarfollowing'>
        <img src='assist/5.jpeg' alt='' className='rightbarfollowingimg'/>
        <span className='rightbarfollowingusername'>dhivagar</span>
      </div>

      <div className='rightbarfollowing'>
        <img src='assist/5.jpeg' alt='' className='rightbarfollowingimg'/>
        <span className='rightbarfollowingusername'>dhivagar</span>
      </div>

      <div className='rightbarfollowing'>
        <img src='assist/5.jpeg' alt='' className='rightbarfollowingimg'/>
        <span className='rightbarfollowingusername'>dhivagar</span>
      </div>
    </div>
    </>
  )
}
  return (
    <div className='rightbar'>
       
       <div className='rightwrapper'>
    {profile ? <Profilerightbar /> : <Homerightbar />}
       </div>
    </div>
  )
}
