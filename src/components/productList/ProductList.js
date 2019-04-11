import React, { Component } from 'react';
import './ProductList.css';
import ProductEl from '../ProductEl/ProductEl';
import callAPI from '../../callAPI';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            limit: 20,
        }
    }

    componentDidMount() {
        let limit = this.state.limit;
        let endPoint = `/products/?status=true&_page=1&_limit=${20}`;
        callAPI(endPoint,"GET").then(res => {
            console.log("data: ", res.data);
            this.setState({
                products: res.data
            })
        })
        .catch(err => {
            console.log("err: ", err);
        })

    }   
    
    render() {
        let { products } = this.state;

        return (
            <section id="aa-product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="aa-product-area">
                                    <div className="aa-product-inner">
                                        <div className="tab-content">
                                            <div className="tab-pane fade in active" id="men">
                                                <ul className="aa-product-catg">
                                                   { this.showProductEls() }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }


    showProductEls = () => {
        let result = []
        let products = this.state.products;
        result = products.map((product, index) => {
            return(
                <li key={index}>
                    <ProductEl 
                        product={ product }
                        onAddToCart = { this.props.onAddToCart }
                    />
                </li>
            )
        })

        return result;
    }
}
