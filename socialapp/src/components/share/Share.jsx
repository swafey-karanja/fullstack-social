import "./Share.css"
import {EmojiEmotions, Label, PermMedia, Room} from "@mui/icons-material"

export default function Share() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src= {`${PF}people/img1.jpg`} alt="" className="shareProfileImg" />
                <input placeholder="what's on your mind?" 
                className="shareInput"
                 />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="orange" className="shareIcon"/>
                        <span className="shareOptionText">Photo/ Video</span>
                    </div>
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
                <button className="shareButton">Post</button>
            </div>
        </div>
    </div>
  )
}
