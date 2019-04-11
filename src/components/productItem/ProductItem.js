import React, { Component } from 'react'

export default class ProductItem extends Component {

    constructor(props) {
        super(props);
        this.onUpdateStatus = this.onUpdateStatus.bind(this);
    }

    onUpdateStatus(){
        this.props.onUpdateProductStatus(this.props.product);
    }

    onDeleteProduct = () => {
        let id = this.props.product.id;
        this.props.onDeleteProduct(id);
    }

    onUpdateProduct = () => {
        let id = this.props.product.id;
        this.props.onUpdateProduct(id);
    }

    render() {

        let product = this.props.product;
        let index = this.props.index;
        return (
            <tr>
                <td>{ index }</td>
                <td>{ product.name }</td>
                <td>{ product.price } VND</td>
                <td>
                    <span 
                        className={ product.status ? "label label-success" : "label label-danger" }
                        onClick = { this.onUpdateStatus }
                    >
                        { product.status ? "active" : "locked" }
                    </span>
                </td>
                <td>
                    <div className="text-center">
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            onClick={ this.onUpdateProduct }
                        >
                            Edit
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-danger ml-10"
                            onClick={ this.onDeleteProduct }
                        >
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
}
