import React from 'react';
import './Footer.css';
import Logo from '../../assets/pictures/Dunder-Mifflin-Logo-Light.png';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={Logo} alt="Dunder Mifflin Logo" className="logo-footer" />
            <ul className="links-right">
                <li className="links-right-link">About</li>
                <li className="links-right-link">Contact</li>
            </ul>
            <p className="copyright">© 2017 Dunder Mifflin Paper Company</p>
        </footer>
    );
}

export default Footer;