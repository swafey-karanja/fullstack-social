import "./Topbar.css"
import {Search, Person, Chat, Notifications} from "@mui/icons-material"
import {Link} from "react-router-dom";


export default function Topbar() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <Link to= "/" style = {{textDecoration: "none"}} >
              <span className="logo">
                SwafSocial
              </span>
            </Link>
        </div>

        <div className="topbarCenter">
            <div className="searchbar">
              < Search className="searchIcon"/>
              <input placeholder="Search for people or posts" className="searchInput" />
            </div>
        </div>

        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">5</span>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">3</span>
            </div>
          </div>
          <Link to ="/profile/:username" style = {{textDecoration: "none"}}>
            <img src= {`${PF}people/img1.jpg`} 
            alt="person1" 
            className="topbarImage" 
            />
          </Link>
        </div>
    </div>
  );
}
