import React from 'react';
import './navbar.css'
import logoimg from "../assets/logo.svg"
import navicon from "../assets/icon.svg"
import profileimg from "../assets/profile.svg"

const Navbar = () => {
    return ( 
        <>
        <div className="nav">
            <img src={logoimg} alt="logo" />

            <div className="navicons">
                <img src={navicon} alt="navicon" />
                <img src={navicon} alt="navicon" />
                <img src={navicon} alt="navicon" />
                <img src={navicon} alt="navicon" />
            </div>

            <img src={profileimg} alt="profimg" />


        </div>
        
        </>
     );
}
 
export default Navbar;