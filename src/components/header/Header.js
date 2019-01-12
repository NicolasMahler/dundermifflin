import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../../assets/pictures/Dunder-Mifflin-Logo-Light.png';


export default class Header extends Component {


    render() {
        return (
            <header className="header__container">
                <Link to="/">
                    <img src={ Logo } className="header__image" />
                </Link>
            </header>
        )
    }
}