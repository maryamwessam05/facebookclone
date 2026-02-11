import React from 'react';
import cardimg from '../assets/carimg.png'
import cardprof from '../assets/cardprof.png'
import './card.css'

const Card = () => {
    return (
        <>
            <div className="card">
                <img className='cardimg' src={cardimg} alt="" />
                <div className="profile">
                    <img src={cardprof} alt="" />
                    <h5>Islam Ali</h5>
                </div>
            </div>
        
        </>

     );
}
 
export default Card;