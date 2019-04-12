import React, { Component } from 'react';
import './ProductList.css';
import ProductEl from '../ProductEl/ProductEl';
import callAPI from '../../callAPI';
import { totalmem } from 'os';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            limit: 8,
            curentPage: 1,
            totalPage: 6,
            keyWord: ""
        }
    }

    componentDidMount() {
        let limit = this.state.limit;
        let endPoint = `/products/?status=true&_page=1&_limit=${limit}`;
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

    componentWillReceiveProps(nextProps) {
        let keyWord = nextProps.keyWord.trim();
        let limit = this.state.limit;
        let page = this.state.curentPage;
        let endPoint = `/products/?`;

        this.setState({
            keyWord: keyWord,
            curentPage: 1
        })

        if(keyWord !="") {
            endPoint+= `name_like=${keyWord}`
        }

        endPoint += `&status=true&_page=${1}&_limit=${limit}`;

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

                    <div className="aa-product-catg-pagination text-center">
                        <nav>
                            <ul className="pagination">
                                <li>
                                    <a  aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                { this.showPageEls() }
                                <li>
                                    <a  aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div> 

                </div>

                

            </section>
        )
    }

    showPageEls = () => {
        let totalPage = this.state.totalPage;
        let curentPage = this.state.curentPage;
        let result = []
        for(let i = 1; i <= totalPage; i++) {
            result.push(
                <li 
                    key={ i }
                    className={ curentPage === i ? "active" : "" }
                    onClick={ () => this.onChangePage(i) }
                >
                    <a >{ i }</a>
                
                </li>
            )
        }
        return result;
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

    onChangePage = (page) => {
        let keyWord = this.state.keyWord;
        let limit = this.state.limit;
        let endPoint = `/products/?`;

        if(keyWord !="") {
            endPoint+= `name_like=${keyWord}`
        }

        endPoint += `&status=true&_page=${page}&_limit=${limit}`;
        
        callAPI(endPoint,"GET").then(res => {
            console.log("data: ", res.data);
            this.setState({
                products: res.data
            })
        })
        .catch(err => {
            console.log("err: ", err);
        })

        this.setState({
            curentPage: page
        })
    }
}
