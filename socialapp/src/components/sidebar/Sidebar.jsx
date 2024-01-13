import "./sidebar.css"
import { Bookmarks, Chat, Event, Group, PlayArrow, RssFeed, School, WorkOutline, Help } from "@mui/icons-material"
import { Users } from "../../Data";
import Friendlist from "../friendlist/Friendlist"

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
              <RssFeed className="sidebarIcon"/>
              <span className="sidebarListItemText"><b>Feed</b></span>
          </li>
          <li className="sidebarListItem">
              <Chat className="sidebarIcon"/>
              <span className="sidebarListItemText"><b>Chats</b></span>
          </li>
          <li className="sidebarListItem">
              <PlayArrow className="sidebarIcon"/>
              <span className="sidebarListItemText"><b>Videos</b></span>
          </li>
          <li className="sidebarListItem">
              <Group className="sidebarIcon"/>
              <span className="sidebarListItemText"><b>Groups</b></span>
          </li>
          <li className="sidebarListItem">
              <Bookmarks className="sidebarIcon"/>
              <span className="sidebarListItemText"><b>Bookmarks</b></span>
          </li>
          <li className="sidebarListItem">
              <Help className="sidebarIcon"/>
              <span className="sidebarListItemText"><b>Questions</b></span>
          </li>
          <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon"/>
              <span className="sidebarListItemText"><b>Jobs</b></span>
          </li>
          <li className="sidebarListItem">
              <Event className="sidebarIcon"/>
              <span className="sidebarListItemText"><b>Events</b></span>
          </li>
          <li className="sidebarListItem">
              <School className="sidebarIcon"/>
              <span className="sidebarListItemText"><b>Courses</b></span>
          </li>
        </ul>

        <button className="sidebarButton">More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {Users.map (u => (
            <Friendlist key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
