import "./online.css";
import React, { useState } from 'react';

export default function Online({user}) {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowClick = () => {
    // Implement logic for following the user
    setIsFollowed(true);
  };

  const handleUnfollowClick = () => {
    // Implement logic for unfollowing the user
    setIsFollowed(false);
  };

  return (
    <>
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src="/assets/person/user.png" alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.name}</span>
    
    </li>
      {isFollowed ? (
        <button className="followButton" onClick={handleUnfollowClick}>
          Unfollow
        </button>
      ) : (
        <button className="followButton" onClick={handleFollowClick}>
          Follow
        </button>
      )}
      </>
  );
}
