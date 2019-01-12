import React, { Component } from 'react';
import './HamburgerMenu.css';

class HamburgerMenu extends Component {

    constructor() {
        super();
        this.state = {
            active: false,
        }
        this.setActive = this.setActive.bind(this);
    }

    setActive() {
        this.setState({ active: !this.state.active });
    }

    render() {
        return (
            <ul className="hamburger-menu d-block d-md-none">
                <li className="hamburger-icon" onClick={this.setActive}>
                    <div className={this.state.active ? 'change bar1' : 'bar1'}></div>
                    <div className={this.state.active ? 'change bar2' : 'bar2'}></div>
                    <div className={this.state.active ? 'change bar3' : 'bar3'}></div>
                </li>
                <li className={this.state.active ? 'change hamburger-button' : 'hamburger-button'}>About Us</li>
                <li className={this.state.active ? 'change hamburger-button' : 'hamburger-button'}>Shop</li>
            </ul>
        )
    }

}

export default HamburgerMenu;