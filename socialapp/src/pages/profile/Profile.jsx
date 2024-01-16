import "./profile.css"
import React, { useEffect, useState } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import axios from "axios"

export default function Profile() {

    const [user,setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect( () => {
        const fetchUser = async () =>{
          const res = await axios.get(`/users?username=Gon`);
          setUser(res.data);
        };
        fetchUser();
      },[]);

  return (
    <>
     <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={`${PF}posts/16.jpg`} alt="" className="profileCoverImg" />
                        <img src={`${PF}posts/9.jpg`} alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username = "Gon"/>
                    <Rightbar Profile/>
                </div>
            </div>
        </div>
    </>
  )
}
