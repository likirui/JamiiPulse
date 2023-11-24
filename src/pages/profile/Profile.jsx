import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import MyFeed from "../../components/myfeed/MyFeed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile({ user }) {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/photo1.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/user-profile.png"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user ? user.name : ''}</h4>
                <span className="profileInfoDesc">Hello World!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <MyFeed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
