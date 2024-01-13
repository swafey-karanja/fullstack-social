import Share from "../share/Share.jsx"
import Post from "../post/Post.jsx"
import "./feed.css"
import { Posts } from "../../Data.js";

export default function feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}
