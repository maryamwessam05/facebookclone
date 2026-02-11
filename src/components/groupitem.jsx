import React from 'react';
import group from '../assets/group.png'
import './groupitem.css'

const Groupitem = () => {
    return ( 
        <>
            <div className="groupitem">
                        <img src={group} alt="" />
                        <h4>UI / UX Designers & Developers</h4>
                    </div>
        </>
     );
}
 
export default Groupitem;