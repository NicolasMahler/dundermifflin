import React, { Component } from 'react';
import './DuoContainer.css';

class DuoContainer extends Component {
    render() {
        if (this.props.leftTop) {
            return (
                <div className="container duo">
                <div className="row vertical-align-reverse rowDuo">
                    <div className="col-md-6 col-12">
                        { this.props.children[0] }
                    </div>
                    <div className="col-md-6 col-12">
                        { this.props.children[1] }
                    </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container duo">
                <div className="row vertical-align rowDuo">
                    <div className="col-md-6 col-12">
                        { this.props.children[1] }
                    </div>
                    <div className="col-md-6 col-12">
                        { this.props.children[0] }
                    </div>
                    </div>
                </div>
            )
        }
    }
}

export default DuoContainer;