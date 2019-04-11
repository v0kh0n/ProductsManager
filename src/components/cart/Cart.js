import React, { Component } from 'react';
import './Cart.css';
import CartItem from '../cartItem/CartItem';

export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        }
    }

    componentDidMount = () => {
        this.setState({
            cartItems: this.props.cartItems
        }, ()=> {console.log("cartItems: ", this.state.cartItems)});
    }
    render() {
        return (
            <section id="cart-view">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="cart-view-area">
                        <div className="cart-view-table">
                            <form >
                            <div className="table-responsive">
                                <table className="table">
                                <thead>
                                    <tr>
                                    <th />
                                    <th />
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.showCartItems() }
                                </tbody>
                                </table>
                            </div>
                            </form>
                            {/* Cart Total view */}
                            <div className="cart-view-total">
                            <h4>Cart Totals</h4>
                            <table className="aa-totals-table">
                                <tbody>
                                
                                <tr>
                                    <th>Total</th>
                                    <td> { this.getTotalPrice() } VND</td>
                                </tr>
                                </tbody>
                            </table>
                            <a className="aa-cart-view-btn">Proced to Checkout</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }

    showCartItems = () => {
        let result = [];
        let cartItems = this.state.cartItems;
        if(cartItems.length > 0) {
            result = cartItems.map((item, index) => {
                return (
                    <CartItem 
                        key={ index }
                        product={ item }
                        onChangeQuantity={this.props.onChangeQuantity}
                    />
                )
            });
        }
        return result;
    }

    getTotalPrice = () => {
        let totalPrice = 0;
        let cartItems = this.state.cartItems;
        cartItems.forEach(item=>{
            totalPrice += item.quantity * item.price;
        });
        return totalPrice;
    }

    
}
