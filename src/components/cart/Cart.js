import React, { Component } from 'react';
import './Cart.css';

export default class Cart extends Component {
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
                                    <tr>
                                    <td>
                                        <a className="remove">
                                        <i className="fa fa-close" />
                                        </a>
                                    </td>
                                    <td>
                                        <img alt="img" />
                                    </td>
                                    <td>
                                        <a className="aa-cart-title">product.title</a>
                                    </td>
                                    <td>product.price</td>
                                    <td>
                                        <input className="aa-cart-quantity" type="number" />
                                    </td>
                                    <td>product.totalPrice </td>
                                    </tr>
                                    
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
                                    <td>totalOrderPrice </td>
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
}
