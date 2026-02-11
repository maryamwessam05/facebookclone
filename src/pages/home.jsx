import React from 'react';
import Navbar from '../components/navbar';
import "./home.css"
import Leftcol from '../components/leftcol';
import Imagecards from '../components/imagecards';

const Home = () => {
    return ( 
        <>
        <Navbar />
        <div className="body">

        <div className="col1">
            <Leftcol />
        </div>

        <div className="middlecol">
            <Imagecards />
            
        </div>
        
        </div>
        </>

     );
}
 
export default Home;