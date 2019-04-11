import React, { Component } from 'react';
import ProductForm from '../components/productForm/ProductForm';
import Control from '../components/control/Control';
import ProductTable from '../components/productTable/ProductTable';
import Pagination from '../components/pagination/Pagination';
import  callAPI from '../callAPI';

class ProductManagerPage extends Component {
    constructor(props){
        super(props);
        this.onTogglePrdctForm = this.onTogglePrdctForm.bind(this);
        this.onClosePrdctForm = this.onClosePrdctForm.bind(this);
        this.onSubmitPrdctForm = this.onSubmitPrdctForm.bind(this);
        this.onUpdateProductStatus = this.onUpdateProductStatus.bind(this);
        this.updateProductsState = this.updateProductsState.bind(this);
        this.onDeleteProduct = this.onDeleteProduct.bind(this);
        this.onUpdateProduct = this.onUpdateProduct.bind(this);
        this.state={
            products: [],
            isDisplayPrductForm: false,
            edittingProduct: null,
            page: 1,
            limit: 5, // number of products in a page.
            keyWord: '',
            sort: {
                field:'name',
                type: 1
            }
        }
    }

    //invoked after component is rendered.
    componentDidMount = () => {
        this.getProducts();
    }

    getProducts = (page) => {
        let endPoint = "/products/?";
        let keyWord = this.state.keyWord.trim();
        let order = this.state.sort.type === 1 ? "asc" : "desc" ;
        let sortField = this.state.sort.field;
        let limit = this.state.limit;

        if(!page) {
            page = this.state.page;
        }

        if(keyWord !== ""){
            endPoint += `name_like=${keyWord}`;
        }

        endPoint +=`&_sort=${sortField}&_order=${order}&_page=${page}&_limit=${limit}`;

        callAPI(endPoint,'GET').then(res => {
            console.log("data: ", res.data)
            this.setState({
                products: res.data
            })
        }).catch(err => {
            console.log("err: ", err);
        });
    }

    getProductByID = (id) => {
        callAPI(`/products/${id}`,'GET').then(res => {
            console.log("data: ", res.data)
            return res.data;
        }).catch(err => {
            console.log("err: ", err);
        });
    }

    addProduct = (product) => {
        callAPI("/products",'POST', product).then(res => {
            console.log("addProduct: ", res.data)
            this.getProducts();
        }).catch(err => {
            console.log("addProduct Err: ", err);
        });
    }

    deleteProduct = (id) => {
        callAPI(`/products/${id}`,'DELETE').then(res => {
            console.log("deleteProduct: ", res.data)
            this.getProducts();
        }).catch(err => {
            console.log("deleteProduct Err: ", err);
        });
    }

    onTogglePrdctForm() {

        this.setState({
            isDisplayPrductForm: !this.state.isDisplayPrductForm
        })

    }

    onAddProduct = () => {
        if(this.state.edittingProduct){
            this.setState({
                edittingProduct: null
            });
        }

        this.showProductForm();
    }

    onClosePrdctForm() {

        this.setState({
            isDisplayPrductForm: false
        })

    }

    onSubmitPrdctForm(product) {

        let products = this.state.products;
        let id = product.id;
        //Update Product when product id is exist.
        //else, add a new product.
        if(id) {
            // let index = this.findIndex(product.id, products);
            // products[index] = product;
            // this.setState({
            //     edittingProduct: product
            // })
            
            callAPI(`/products/${id}`,'PUT', product).then(res => {
                console.log("update product: ", res.data)
                this.getProducts();
            }).catch(err => {
                console.log("deleteProduct Err: ", err);
            });

            this.setState({
                edittingProduct: product
            })

        }else{
            // product.id = this.generateId();
            // products.push(product);
            this.addProduct(product);
            
        }

        this.updateProductsState(products);

    }

    onSearch = (keyWord) => {
        let endPoint = "/products/?";
        let order =  "asc";
        let sortField = "name";
        let page = 1;
        let limit = this.state.limit;

        this.setState({
            keyWord: keyWord
        })

        keyWord = keyWord.trim();
        
        if(keyWord !== ""){
            endPoint += `name_like=${keyWord}`;
        }

        endPoint +=`&_sort=${sortField}&_order=${order}&_page=${page}&_limit=${limit}`;
        console.log("search: ", endPoint);
        callAPI(endPoint,'GET').then(res => {
            console.log("data: ", res.data)
            this.setState({
                products: res.data
            })
        }).catch(err => {
            console.log("err: ", err);
        });
    }

    onSort = (sortField, sortType) => {

        let sort = {
            field: sortField,
            type: sortType
        }

        this.setState({
            sort: sort
        })

        let endPoint = "/products/?";
        let keyWord = this.state.keyWord.trim();
        let order = sortType === 1 ? "asc" : "desc" ;
        //let sortField = sortField;
        let page = this.state.page;
        let limit = this.state.limit;

        if(keyWord !== ""){
            endPoint += `name_like=${keyWord}`;
        }

        endPoint +=`&_sort=${sortField}&_order=${order}&_page=${page}&_limit=${limit}`;

        callAPI(endPoint,'GET').then(res => {
            console.log("data: ", res.data)
            this.setState({
                products: res.data
            })
        }).catch(err => {
            console.log("err: ", err);
        });

    }

    generateId = () => {

        let products = this.state.products;

        if(products.length > 0){
            let maxId = -1;

            products.forEach((product) => {
                if(maxId < product.id) {
                    maxId = product.id;
                }
            });

            return maxId + 1;

        }else{

            return 1;

        }

    }

    onUpdateProductStatus(id) {

        let products = this.state.products;
        let index = this.findIndex(id, products);
        if(index !== -1){
            products[index].status = !products[index].status;
            this.updateProductsState(products);
        }

    }

    onDeleteProduct(id){
        // let products = this.state.products;
        // let index = this.findIndex(id, products);

        // if(index !== -1) {
        //     products.splice(index, 1);
        // }
        
        // this.updateProductsState(products);

        this.deleteProduct(id);
    }

    onUpdateProduct(id){
        // console.log(id);
        // let products = this.state.products;
        // let index = this.findIndex(id, products);
        // let edittingProduct = products[index];
        // console.log('edtProduct', edittingProduct);
        // this.setState({
        //     edittingProduct: edittingProduct
        // });
        
        callAPI(`/products/${id}`,'GET').then(res => {
            console.log("update product: ", res.data)
            this.setState({
                edittingProduct: res.data
            })
            this.showProductForm();

        }).catch(err => {
            console.log("deleteProduct Err: ", err);
        });

    }

    showProductForm(){
        this.setState({
            isDisplayPrductForm: true
        });
    }

    findIndex(id, arr){

        let res = -1;

        arr.forEach((item, index) => {
            if(item.id === id){
                res = index
            }
        });

        return res;

    }

    updateProductsState(products){

        this.setState({
            products: products
        })

    }

    onChangePage = (page) => {
        this.setState({
            page: page
        })
        this.getProducts(page);
    }

    render() {
        let { products, isDisplayPrductForm, edittingProduct, sort } = this.state; // ES6 syntax: <=> products = this.state.products, isDisplayPrductForm = this.state.isDisplayProductFrom
        
        //show or hide product form
        let elmtProductForm = isDisplayPrductForm ? 
                <ProductForm 
                    onClosePrdctForm={ this.onClosePrdctForm } 
                    onSubmitPrdctForm={ this.onSubmitPrdctForm } 
                    edittingProduct={ edittingProduct }
                /> : " ";
        
        return (
            
          
            <div className="container">
                
                <div className="text-center">
                    <h1>Products Manager</h1>
                </div>
                <hr />
                <div className="row">
                    <div className= "col-xs-4 col-sm-4 col-md-4 col-lg-4" >
                        {/* ProductForm */}
                        { elmtProductForm }
                        
                    </div>

                    <div className={ isDisplayPrductForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
                        {/* Add Product Btn */}
                        <button type="button" className="btn btn-primary" onClick={ this.onAddProduct }>Add Product</button>
                        

                        {/* Search + sort section */}
                        <Control 
                            onSearch={ this.onSearch }
                            onSort={ this.onSort }
                            sort = { sort }
                        />
                        
                        {/* Table Section */}
                        <ProductTable 
                            products={ products } 
                            onUpdateProductStatus={ this.onUpdateProductStatus }
                            onDeleteProduct={ this.onDeleteProduct }
                            onUpdateProduct={ this.onUpdateProduct }
                            page={ this.state.page }
                            limit={ this.state.limit }
                        />
                        
                        {/* Pagination */}
                        <div className="text-center">
                            <Pagination 
                                onChangePage={ this.onChangePage }
                            />
                        </div>
                        
                    </div>
                </div>
                
            </div>

        
        );
    }
}

export default ProductManagerPage;
