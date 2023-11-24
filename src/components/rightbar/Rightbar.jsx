import "./rightbar.css";
import Online from "../online/Online";
import React, { useEffect, useState } from 'react';

export default function Rightbar({ profile, user }) {
  const HomeRightbar = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users?_start=1&_limit=12')
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
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Mercy Johnson</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ads.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        {loading ? (
            <p>Loading...</p>
          ) : (
            users.map(u => <Online key={u.id} user={u} />)
          )}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const [followers, setFollowers] = useState([]);
     useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_start=4&_limit=6');
        const followersData = await response.json();
        console.log('Followers data:', followersData); // Log the data
        setFollowers(followersData);
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };

    fetchFollowers();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user && user.address ? user.address.city : 'Gwenborough'}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Street:</span>
            <span className="rightbarInfoValue">{user && user.address ? user.address.street : 'Kulas Light'}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Followers</h4>
        <div className="rightbarFollowings">
        {followers.map((follower) => (
          <div key={follower.id} className="rightbarFollowing">
            <img
              src="assets/person/user.png" 
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">{follower.name}</span>
          </div>
        ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {profile ? <ProfileRightbar user={user} /> : <HomeRightbar />}
      </div>
    </div>
  );
}
