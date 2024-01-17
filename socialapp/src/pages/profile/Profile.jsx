import "./profile.css"
import React, { useEffect, useState } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import axios from "axios"
import { useParams } from "react-router"

export default function Profile() {

    const [user,setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const username = useParams().username;
  

    useEffect( () => {
        const fetchUser = async () =>{
          const res = await axios.get(`/users?username=${username}`);
          setUser(res.data);
        };
        fetchUser();
      },[username]);

  return (
    <>
     <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={user.coverPicture || `${PF}posts/16.jpg`} alt="" className="profileCoverImg" />
                        <img src={user.profilePicture || `${PF}people/noProfile.png`} alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username ={username}/>
                    <Rightbar user={user}/>
                </div>
            </div>
        </div>
    </>
  )
}
