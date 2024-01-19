import { useContext, useRef, useState } from "react";
import "./Share.css";
import {EmojiEmotions, Label, PermMedia, Room} from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext);
    const desc = useRef();
    const [file,setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();

        const newPost = {
            userId : user._id,
            desc : desc.current.value
        }

        try {
            await axios.post("/posts", newPost);
        } catch (error) {
            
        }
    }

  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img 
                    src= {user.profilePicture 
                    ? PF + user.profilePicture 
                    : PF + "people/noProfile.png"} 
                    alt="" 
                    className="shareProfileImg" 
                    />
                <input placeholder="what's on your mind?" 
                className="shareInput"
                ref={desc}
                 />
            </div>
            <hr className="shareHr" />
            <form className="shareBottom" onSubmit={submitHandler} >
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="orange" className="shareIcon"/>
                        <span className="shareOptionText">Photo/ Video</span>
                        <input 
                        style={{display : "none"}} 
                        type="file" id="file" 
                        accept=".png,.jpeg,.jpg" 
                        onChange={(e) => setFile(e.target.files[0])}
                        />
                    </label>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="red" className="shareIcon"/>
                        <span className="shareOptionText">Emotion</span>
                    </div>
                </div>
                <button className="shareButton" type="submit" >Post</button>
            </form>
        </div>
    </div>
  )
}
