import React, { Component } from 'react';
import './CompanyItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class CompanyItem extends Component {

    render() {
        return (
            <div className="item-card">
                <FontAwesomeIcon icon={ this.props.icon } size="6x" className="icon"/>
                <h4 className="item-card-title">{ this.props.title }</h4>
                <p className="item-card-text">{ this.props.text }</p>
                <Link to={ this.props.link } className="item-card-text">{this.props.linkText}</Link>
            </div>
        )
    }
}

export default CompanyItem;