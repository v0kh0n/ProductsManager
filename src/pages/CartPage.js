import React, { Component } from 'react';
import Cart from '../components/cart/Cart';
import callAPI from '../callAPI';

export default class CartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        }
    }

    componentDidMount() {
        this.setState({
            cartItems: this.props.cartItems
        })
    }
    
    
    componentWillReceiveProps(nextProps) {
        console.log("cWR: ", nextProps.cartItems);
        this.setState({
            cartItems: nextProps.cartItems
        })
    }
    

    render() {
        console.log(this.props.cartItems);
        console.log("history: ", this.props);
        return (
            <Cart 
                cartItems={ this.props.cartItems }
                onChangeQuantity= { this.props.onChangeQuantity }
                onCheckout={ this.onCheckout }
                onDeleteItem={ this.props.onDeleteItem }
            />
        )
        
    }

    onCheckout = () => {
        let cartItems = this.state.cartItems;
        if(cartItems.length > 0) {

            let order = {
                items: cartItems
            }
            let endPoint = "/orders";

            callAPI(endPoint, "POST", order).then(res => {
                this.props.onResetCart();
                this.props.history.push("/");
                alert("order successfully!");
                
            })
            .catch(err => {
                console.log("err: ", err);
                alert("something was wrong!");
            })
            
        }else{
            alert("please add products to cart!");
        }
        console.log(this.props);
        
    }

    onDeleteItem = (id) => {
        
    }


}
