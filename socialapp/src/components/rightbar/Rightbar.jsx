import "./rightbar.css"
import { Users } from "../../Data";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {Add} from "@mui/icons-material";
 

export default function Rightbar({ user }) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const {user:currentUser} = useContext(AuthContext);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    }
    getFriends();
  }, [user._id]);

  const HomeRightbar = () => {
    return(
        <>
        {user.username ==! currentUser.username && (
          <button className="followButton">
            <Add />
          </button>
        )}
            <div className="birthdayContainer">
              <img src="assets/posts/gift.png" alt="" className="birthdayImg" />
              <span className="birthdayText">
                <b>Shirleen Joy</b> and <b>1 other friend</b> have a birthday today.
              </span>
            </div>
            <img src="assets/posts/coke.jpg" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              {Users.map(u => (
                <Online key={u.id} user={u} />
              ))}
            </ul>
        </>
    );
  };

  const ProfileRightbar = () => {
    return (
        <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship status:</span>
            <span className="rightbarInfoValue"> {
              user.relationship ===1 ? "Single" 
            : user.relationship===2 ? "Married" 
            : "Undefined" }</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link style ={{ textDecoration: "none" }}to={"/profile/" + friend.username}>
                <div className="rightbarFollowing">
                <img src= {friends.profilePicture 
                  ? PF + friends.profilePicture 
                  : PF + `people/noProfile.png`} 
                  alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))};
        </div>
        </>
    );
  };

  return (
    
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
