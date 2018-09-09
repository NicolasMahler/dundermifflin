import React, { Component } from 'react';
import StoreItem from './components/store-item/StoreItem';

class Store extends Component {
    render() {
        return (
            <div>
                <h1>Store</h1>
                <StoreItem/>
                <StoreItem sale />
            </div>
        )
    }
}

export default Store;