import "./profile.css"
import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

export default function Profile( username ) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
                        <h4 className="profileInfoName">Arthur Boyle</h4>
                        <span className="profileInfoDesc">knight king</span>
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
