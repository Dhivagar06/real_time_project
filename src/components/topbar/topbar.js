import './topbar.css'

export default function Topbar(){
return(
    <div className='topbarcontainer'>
        <div className='topbarleft'>
            <span className='logo'>facebook</span>
        </div>

        <div className='topbarcenter'>
            <div className='searchbar'>
           <div className='searchicon'> <i class="bi bi-search " ></i></div>
            <input placeholder='search for friends , post or videos' className='searchinput'></input>
            </div>
            </div>

        <div className='topbarright'>
            <div className='topbarlinks'>
                <span className='topbarlink'>Home</span>
                <span className='topbarlink'>time</span>
            </div>
            <div className='topbaricons'>
                <div className='topbaritems'>
                <i class="bi bi-person-fill"></i>
                <span className='topbariconsbadge'>1</span>
                </div>
                <div className='topbaritems'>
                <i class="bi bi-chat-left-text-fill"></i>
                <span className='topbariconsbadge'>1</span>
                </div>
                <div className='topbaritems'>
                <i class="bi bi-bell-fill"></i>
                <span className='topbariconsbadge'>1</span>
                </div>
            </div>
            <img src='/assist/5.jpeg' className='topbarimage' alt=''></img>
        </div>
    </div>
)
}