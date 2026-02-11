import React from 'react';
import './watchitem.css'
import watchicon from '../assets/watch.svg'

const Watchitem = () => {
    return ( 
        <>
        <div className="watchitem">
                    <img src={watchicon} alt="" />
                    <h3>Watch</h3>
                </div>
        </>
     );
}
 
export default Watchitem;