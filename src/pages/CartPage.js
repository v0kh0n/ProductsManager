import React, { Component } from 'react';
import Cart from '../components/cart/Cart';

export default class CartPage extends Component {
    render() {
        console.log(this.props.order);
        return (
            <Cart />
        )
    }
}
