import React from 'react';
import './Parallax-Header.css'; 
import Navbar from '../../../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const ParallaxHeader = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="parallax-container">
                <h1 className="center-branding">A paper solution for <em>every</em> situation</h1>
                <div className="button-div">
                    <Link className="link" to="/store"><button className="call-to-action--primary call-to-action">Order Online</button></Link>
                    <Link className="link" to="/contactus"><button className="call-to-action--secondary call-to-action">Contact Us</button></Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ParallaxHeader;