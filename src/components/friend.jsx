import React from 'react';
import friendimg from '../assets/profile.svg'
import './friend.css'
import Confirmbtn from './confirmbtn';

const Friend = () => {
    return ( 
        <>
            <div className="friendtab">
                <div className="friendname">
                    <div className="prof">
                        <img src={friendimg} alt="" />
                        <h3>Guy Hawkins</h3>
                    </div>
                    <h4>4H</h4>
                </div>
                <div className="actions">
                <Confirmbtn/>
                <div className="delete">Delete</div>
                </div>

            </div>
        
        </>
     );
}
 
export default Friend;