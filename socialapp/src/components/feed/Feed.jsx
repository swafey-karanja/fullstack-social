import Share from "../share/Share.jsx"
import Post from "../post/Post.jsx"
import "./feed.css"
import { useEffect, useState } from "react";
import axios from "axios";


export default function Feed( {username} ) {
  const [posts,setPosts] = useState([]);
  
        useEffect(() => {
          const fetchData = async () => {
            const res = username
            ? await axios.get("/posts/profile/" + username)
            : await axios.get("posts/timeline/65a524b7f1341528a745b99f");
            setPosts(res.data);
          };
        
          fetchData();
        }, [username]);
        

  return (
    <div className="feed">
      
      <div className="feedWrapper">
        <Share/>
        {posts.map((p) => (
          <Post key={p._id} post={p}/>
        ))}
      </div>
    </div>
  )
}
