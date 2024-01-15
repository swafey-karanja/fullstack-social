import Share from "../share/Share.jsx"
import Post from "../post/Post.jsx"
import "./feed.css"
import { useEffect, useState } from "react";
import axios from "axios";


export default function Feed( {username} ) {
  const [posts,setPosts] = useState([]);
  
        useEffect(() => {
          const fetchData = async () => {
            
        
            try {

              const res = username 
              ? await axios.get("/posts/profile/" + username) 
             : 
             console.log("nothing");

              setPosts(res.data);
            } catch (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                console.error("Error status:", error.response.status);
                console.error("Response data:", error.response.data);
              } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received");
                console.error("Request details:", error.request);
                console.log("URL of the request:", error.request.responseURL);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error message:", error.message);
              }
              // Handle errors here
            }
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
