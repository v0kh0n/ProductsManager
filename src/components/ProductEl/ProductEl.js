import React, { Component } from 'react';
import './ProductEl.css';

export default class ProductEl extends Component {
    render() {
        
        let product = this.props.product;

        return (
            <div className="item">
                <figure>
                    <a className="aa-product-img" >
                        <img src= "https://www.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/9/8935235213746.jpg" alt="polo shirt img"/>
                    </a>
                    <a className="aa-add-card-btn" onClick={ () => this.onAddToCart(product) }>
                        <span className="fa fa-shopping-cart"></span>Add To Cart</a>
                    <figcaption>
                        <h4 className="aa-product-title">
                            <a >  { product.name } </a>
                        </h4>
                        <span className="aa-product-price">  { product.price } VND </span>
                    </figcaption>
                </figure>
            </div>
        )
    }

    onAddToCart = (product) => {
        product.quantity = 1;
        this.props.onAddToCart(product);
    }
}
