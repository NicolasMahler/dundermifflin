import React, { Component } from 'react';
import './DuoContainer.css';

class DuoContainer extends Component {
    render() {
        return (
            <div className="container duo">
            <div className="row vertical-align rowDuo">
                <div className="col-sm-12 col-md-6 col-xs-12">
                    { this.props.children[0] }
                </div>
                <div className="col-sm-12 col-md-6 col-xs-12">
                    { this.props.children[1] }
                </div>
                </div>
            </div>
        )
    }
}

export default DuoContainer;