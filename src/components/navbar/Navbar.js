import React, { Component } from 'react';
import Logo from '../../assets/pictures/Dunder-Mifflin-Logo-Light.png';
import HamburgerMenu from '../hamburger-menu/HamburgerMenu';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <img src={ Logo } className="logo" alt="Dunder Mifflin Logo" />
                <HamburgerMenu />
            </nav>
        )
    }
}

export default Navbar;