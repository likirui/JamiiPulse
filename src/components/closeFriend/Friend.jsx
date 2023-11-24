import "./friend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src="assets/person/user.png" alt="" />
      <span className="sidebarFriendName">{user.name}</span>
    </li>
  );
}
