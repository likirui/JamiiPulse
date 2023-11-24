import "./friendfeed.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import FollowerFeed from "../../components/followerfeed/FollowerFeed";
import Rightbar from "../../components/rightbar/Rightbar";
import Share from '../../components/share/Share'

export default function Profile({ user }) {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
         
        
            <FollowerFeed />
        </div>
      </div>
    </>
  );
}
