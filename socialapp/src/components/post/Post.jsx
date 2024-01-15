import { Link } from "react-router-dom";
import "./post.css"
import {MoreVert} from "@mui/icons-material"
import axios from "axios";
import { useEffect, useState } from "react";
import {format} from "timeago.js";


export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect( () => {
    const fetchUser = async () =>{
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  },[post.userId]);

  const likeHandler =() => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }


  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to = {`profile/${user.username}`}>
              <img 
              src={user.profilePicture || PF + `people/noProfile.png`} 
              alt="" 
              className="postProfileImg" 
              />
            </Link>
            <Link to = {`profile/${user.username}`} style = {{textDecoration: "none", color: "black"}}>
              <span className="postUsername">{user.username}</span>
            </Link>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF+post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            
            <img 
            src= {`${PF}posts/heart.png`} alt="" 
            className="likeIcon"  
            onClick={likeHandler}
             />
            <span className="likeCounter">{like} likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
