import React from 'react';
import './navbar.css'
import logoimg from "../assets/logo.svg"
import profileimg from "../assets/profile.svg"
import Hometab from './hometab';

const Navbar = () => {
    return ( 
        <>
        <div className="nav">
            <img src={logoimg} alt="logo" />

            <div className="navicons">
                <Hometab />
                <Hometab />
                <Hometab />
                <Hometab />

            </div>

            <img src={profileimg} alt="profimg" />


        </div>
        
        </>
     );
}
 
export default Navbar;