import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import FeedIcon from '@mui/icons-material/Feed';
import './sidebar.css'
import CloseFriend from "../closeFriend/Friend";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
function Sidebar({ onLogout }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_start=7&_limit=5')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Use navigate to go to the login route
    navigate('/login');

    // Call the onLogout function passed as a prop
    if (onLogout) {
      onLogout();
    }
  };

  const handleMyPostsClick = () => {
    // Use navigate to go to the profile route
    navigate('/profile');
  };

  const handleallFeedClick = () => {
    // Use navigate to go to the profile route
    navigate('/allfeed');
  };
  const handlefriendFeedClick = () => {
    // Use navigate to go to the profile route
    navigate('/friendfeed');
  };
  const handlepostassistantClick = () => {
    //Use navigate to go to the post assistant page
    navigate('/friendfeed');
  }
  const handleMyHomeClick = () => {
    // Use navigate to go to the profile route
    navigate('/home');
  };

  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem" onClick={handleMyHomeClick}>
         <HomeIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Home</span>
         </li>
         <li className="sidebarListItem" onClick={handleallFeedClick}>
         <RssFeedIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Feeds</span>
         </li>
         <li className="sidebarListItem" onClick={handleMyPostsClick}>
         <FeedIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">My Posts</span>
         </li>
         <li className="sidebarListItem" onClick={handlefriendFeedClick}>
         <PeopleIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Following</span>
         </li>
         <li className="sidebarListItem" onClick={handlepostassistantClick}>
         <PeopleIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Post Assistant</span>
         </li>
         
         <li className="sidebarListItem">
         <ChatIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Chats</span>
         </li>
         <li className="sidebarListItem">
         <GroupIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Groups</span>
         </li>
         <li className="sidebarListItem">
         <PlayCircleFilledIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Videos</span>
         </li>
         <li className="sidebarListItem">
         <BookmarkIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Bookmarks</span>
         </li>
         <li className="sidebarListItem">
         <QuestionMarkIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Questions</span>
         </li>
         <li className="sidebarListItem">
         <WorkIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Jobs</span>
         </li>
         <li className="sidebarListItem">
         <EventIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Events</span>
         </li>
         <li className="sidebarListItem">
         <SchoolIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Courses</span>
         </li>
         <li className="sidebarListItem" onClick={handleLogout}>
         <LogoutIcon className='sidebarIcon'/>
         <span className="sidebarListItemText">Logout</span>
         </li>
        </ul>
        <hr className='sidebarHr'/>
        <h4 className="leftbarTitle">Following</h4>
        <ul className="sidebarFriendList">
          {loading ? (
            <p>Loading...</p>
          ) : (
            users.map(u => <CloseFriend key={u.id} user={u} />)
          )}
        </ul>
      </div>
      </div>
  )
}

export default Sidebar