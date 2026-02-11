import React from 'react';
import postprof from "../assets/postimg.png"
import earth from "../assets/earth.svg"
import more from "../assets/more.svg"
import feedimg from "../assets/feedimg.png"
import "./feed.css"

const Feed = () => {
    return ( <>
        <div className="feedpost">
            <div className="profilename">
                <div className="profimg">
                    <img src={postprof} alt="" />
                    <div className="name">
                        <h1>Albert Flores</h1>
                        <div className="time">
                            <h3>2 d</h3>
                            <img src={earth} alt="" />
                        </div>
                    </div>
                
                </div>

                <img src={more} alt="" />
            </div>

            <img src={feedimg} alt="" />
        </div>
    
    </> );
}
 
export default Feed;