import topbar from './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';

function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className='logo'>JamiiPulse</span>
        </div>
        <div className="topbarCenter">
          <div className='searchBar'>
          <SearchIcon className='searchIcon' />
          <input placeholder='Search for friends, post or videos' className='searchInput' />
          </div>
           </div>
           <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">5</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">4</span>
          </div>
        </div>
        <img src="/assets/person/user2.png" alt="" className="topbarImg"/>
      </div>
    </div>
  )
}

export default Topbar