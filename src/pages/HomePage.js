import React, { Component } from 'react';
import ProductList from '../components/productList/ProductList';

export default class HomePage extends Component {
    
    render() {
        return (
            <ProductList 
                onAddToCart= { this.onAddToCart }
            />
            
        )
    }

    onAddToCart = (product) => {
        console.log("product", product);
    }
}
