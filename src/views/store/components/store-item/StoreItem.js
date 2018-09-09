import React, { Component } from 'react';
import './StoreItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from '../../../../assets/pictures/Paper.jpg'
import Watermark from '../../../../assets/pictures/Paper-watermark.jpg';

class StoreItem extends Component {



    render() {
        if (!this.props.sale) {
            return (
                <div className="storeitem__container">
                    <img src={Paper} className="storeitem__image"/>
                    <h5 className="storeitem__title">Dunder Mifflin Original Ream</h5>
                    <hr className="storeitem__hr"/>
                    <div className="storeitem__priceContainer">
                        <p className="storeitem__originalPrice">$32<sup>99</sup></p>
                        <button className="storeitem__addToCart"><FontAwesomeIcon className="storeitem__icon" icon="cart-plus" /></button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="storeitem__container">
                <img src={Watermark} className="storeitem__image"/>
                <h5 className="storeitem__title">Dunder Mifflin Watermark Ream</h5>
                <hr className="storeitem__hr"/>
                <div className="storeitem__priceContainer">
                    <p className="storeitem__originalPrice">
                        <span className="storeitem__originalPriceSale">$32<sup>99</sup></span>
                        <span className="storeitem__salePrice"> $29<sup>99</sup></span>
                    </p>
                    <button className="storeitem__addToCart"><FontAwesomeIcon className="storeitem__icon" icon="cart-plus" /></button>
                </div>
            </div>
            )
        }
    }

}

export default StoreItem;