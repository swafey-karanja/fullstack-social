import Share from "../share/Share.jsx"
import Post from "../post/Post.jsx"
import "./feed.css"
import { useEffect, useState } from "react"


export default function Feed() {
  const [posts,setPosts] = useState([]);

  useEffect(() =>{
    console.log("xyz");
  });

  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))} */}
      </div>
    </div>
  )
}
