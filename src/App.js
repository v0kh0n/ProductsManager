import React, { Component } from 'react';
import './App.css';
import ProductManagerPage from './pages/ProductManagerPage';
import HomePage from './pages/HomePage';
import Header from './components/header/Header';
import CartPage from './pages/CartPage';

import { BrowserRouter as Router, Switch, Route, Link } from'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        }
    }

    render() {
        let { cartItems } = this.state;
        return (
            <Router>
                <Header totalCartItems={ this.getTotalCartItems() }/>
                <Switch>
                    <Route path="/" exact render={() => <HomePage onAddToCart={ this.onAddToCart } />} />
                    <Route path="/admin" component={ ProductManagerPage } />
                    <Route 
                        path="/cart" 
                        render={() => 
                            <CartPage 
                                cartItems={ cartItems }
                                onChangeQuantity={ this.onChangeQuantity }
                            />}
                    
                    />
                </Switch>
                {/* <CartPage /> */}
            </Router> 

            

        );
    }
    
    getTotalCartItems(){
        let total = 0;
        let cartItems = this.state.cartItems;

        cartItems.forEach(item => {
            total += item.quantity;
        });

        return total;
    }
    onAddToCart = (product) => {
        let cartItems = this.state.cartItems;
        let position = -1;
        console.log("add to cart");

        for(let i = 0; i < cartItems.length; i++) {
            if(cartItems[i].id === product.id){
                position = i;
                break;
            }
        }

        if(position === -1) { //item chưa có trong cartItems array.
            cartItems.push(product);
        } else { // item đã được thêm vào giỏ hàng.
            console.log("same cart item");
            console.log(cartItems[position].quantity);
            cartItems[position].quantity = cartItems[position].quantity + 1;
            console.log(cartItems[position].quantity);
        }

        this.setState({
            cartItems: cartItems
        }, () => {console.log("cart: ", this.state.cartItems)});

    }

    onChangeQuantity = (id, quantity) => {
        let cartItems = this.state.cartItems;
        for(let i = 0; i < cartItems.length; i++) {
            if(cartItems[i].id === id){
                cartItems[i].quantity = quantity;
                break;
            }
        }
        this.setState({
            cartItems: cartItems
        })
    }


}

export default App;
