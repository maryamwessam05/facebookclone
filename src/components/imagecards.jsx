import React from 'react';

import './imagecards.css'
import Card from './card';

const Imagecards = () => {
    return ( 

        <>
            <div className="imagecards">
                <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />

                </div>

            </div>
        
        </>
     );
}
 
export default Imagecards;