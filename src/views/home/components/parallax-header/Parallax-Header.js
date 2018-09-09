import React from 'react';
import './Parallax-Header.css'; 
import Navbar from '../../../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const ParallaxHeader = (props) => {
    return (
        <div className="parallax-container">
            <Navbar />
            <h1 className="center-branding">A paper solution for <b><em>every</em></b> situation</h1>
            <div className="button-div">
                <Link className="link" to="/store"><button className="call-to-action--primary call-to-action">Order Online</button></Link>
                <Link className="link" to="/contactus"><button className="call-to-action--secondary call-to-action">Contact Us</button></Link>
            </div>
 </div>

    );
}

export default ParallaxHeader;