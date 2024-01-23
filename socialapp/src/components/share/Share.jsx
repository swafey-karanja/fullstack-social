import { useContext, useRef, useState } from "react";
import "./Share.css";
import {Cancel, EmojiEmotions, Label, PermMedia, Room} from "@mui/icons-material";
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

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            console.log(newPost);
            try {
              await axios.post("/upload", data);
            } catch (err) {}
          }
          try {
            await axios.post("/posts", newPost);
            window.location.reload();
          } catch (err) {}
        };

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
            {file && (
                <div className="shareImgContainer">
                    <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                    <Cancel className="shareCancelImg" onClick={() => setFile(null)}/>
                </div>
            )}
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
};
