import React, { Component } from 'react'
import ProductEl from '../ProductEl/ProductEl';

export default class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product : null
        }
    }

    componentDidMount = () => {
        if(this.props && this.props.product){
            this.setState({
                product: this.props.product
            })
        }
    }

    render() {
        let product = this.props.product;
        return (
            <tr>
                <td>
                    <a className="remove">
                    <i className="fa fa-close" />
                    </a>
                </td>
                <td>
                    <img src="https://www.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/9/8935235213746.jpg" alt="img" />
                </td>
                <td>
                    <a className="aa-cart-title">{ product.name }</a>
                </td>
                <td>{ product.price } VND</td>
                <td>
                    <input 
                        className="aa-cart-quantity"
                        type="number" 
                        name="quantity"
                        value={product.quantity} 
                        onChange={ this.onHandleChange } 
                    />
                </td>
                <td>{ product.price * product.quantity } VND </td>
            </tr>
        )
    }

    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let product = this.state.product;
        let value = parseInt(target.value);
        if( (value && value <= 0) || !value){
            value = 0;
        }
        this.props.onChangeQuantity(product.id ,value);
        
        product.quantity = value;
        this.setState({
            product: product
        })
    }
}
