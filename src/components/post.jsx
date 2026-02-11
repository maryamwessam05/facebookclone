import React from 'react';
import "./post.css"
import profwriteimg from "../assets/profilewrite.png"
import liveimg from "../assets/live.svg"
import photo from "../assets/photo.svg"
import smile from "../assets/smile.svg"

const Post = () => {
    return ( 
        <>
        <div className="blog">
            <div className="row1">
                <img src={profwriteimg} alt="" />
                <div className="writebox">
                    <h3>What’s on your mind, Jenny</h3>
                </div>
            </div>
            
            <div className="row2">
                <div className="postbtn">
                    <img src={liveimg} alt="" />
                    <h4>Live Video</h4>
                </div>
                <div className="postbtn">
                    <img src={photo} alt="" />
                    <h4>Photo/video</h4>
                </div>
                <div className="postbtn">
                    <img src={smile} alt="" />
                    <h4>Feeling/activity</h4>
                </div>
            </div>
        </div>
        
        </>


    );
}
 
export default Post;