import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as locationService from '../../services/LocationService';
// import Logo from '../../assets/pictures/Dunder-Mifflin-Logo-Light.png';
// import Logo from '../../assets/pictures/colored_logo.png';
import HamburgerMenu from '../hamburger-menu/HamburgerMenu';
import './Navbar.css';

class Navbar extends Component {

    state = {
        page: ''
    }

    componentDidMount() {
        this.setState({page: locationService.currentLocation()});
    }

    findLocation = () => {
        setTimeout(() => {
            this.setState({page: locationService.currentLocation()});
        }); 
    }// zero time for the timeout puts this setState at the bottom of the call stack making the page change before the function call

    render() {
        return (
            <React.Fragment>
                <header className="navbar__container">
                    <Link className="navbar__logo" to="/"></Link>
                    <ul className="navbar__link-container d-none d-md-flex">
                        <li>
                            <Link 
                                className={this.state.page === locationService.PAGES.HOME.toLowerCase() ? "navbar__link navbar__link--active" : "navbar__link"} 
                                to="/"
                                onClick={this.findLocation}>Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={this.state.page === locationService.PAGES.STORE.toLowerCase() ? "navbar__link navbar__link--active" : "navbar__link"} 
                                to="/store"
                                onClick={this.findLocation}>Store
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={this.state.page === locationService.PAGES.ABOUT_US.toLowerCase() ? "navbar__link navbar__link--active" : "navbar__link"} 
                                to="/about-us"
                                onClick={this.findLocation}>About Us
                            </Link>
                        </li>
                    </ul>
                </header>
                <HamburgerMenu />
            </React.Fragment>
        )
    }
}

export default Navbar;