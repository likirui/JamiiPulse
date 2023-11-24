import "./friend.css";
import React, { useState, useEffect } from 'react';

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src="assets/person/user.png" alt="" />
      <span className="sidebarFriendName">{user.name}</span>
    </li>
  );
}
