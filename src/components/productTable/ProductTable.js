import React, { Component } from 'react';
import ProductItem from '../productItem/ProductItem';

export default class ProductTable extends Component {
    
       

    render() {

        let { products, page,limit } = this.props;

        //let { products } = this.state;
        
        let productElmts = products.map((product, index) => {
            return (
                <ProductItem 
                    key={ product.id } 
                    product={ product } 
                    index={ index + 1 + ((page-1) * limit) }
                    onUpdateProductStatus={ this.props.onUpdateProductStatus }
                    onDeleteProduct={ this.props.onDeleteProduct }
                    onUpdateProduct={ this.props.onUpdateProduct }
                />
            )
                
        });

        return (

            <table className="table table-bordered table-hover mt-10">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>status</th>
                        <th>Action</th>
                    </tr>
                    
                </thead>
                <tbody>
                    { productElmts }
                </tbody>
            </table>
        )
    }
}
