import React from 'react';
import stream from '../assets/stream.png'
import './streams.css'

const Streams = () => {
    return ( 
        <>
        <div className="streamtab">
            <img src={stream} alt="" />
            <div className="streamtext">
                <h4>Twitch apologises as streamers</h4>
                <h6>Twitch has apologised, after a backlash over new,
                advertising rules.</h6>
                <span>See more</span>
            </div>
        </div>
        
        </>
     );
}
 
export default Streams;