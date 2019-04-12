import React, { Component } from 'react';

class ProductForm extends Component {

    constructor(props) {
        super(props);
        this.onClosePrdctForm = this.onClosePrdctForm.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
        this.state = {
            id:'',
            name:'',
            price: 0,
            status: false
        }
    }

    onClosePrdctForm() {
        this.props.onClosePrdctForm();
    }

    onHandleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        console.log("event: ", value);

        if(name === 'status'){
            value = value === 'true' ? true : false;
        }

        if(name === 'price'){
            value = parseInt(value);
        }

        this.setState({
            [name]: value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        let product = this.state;

        if(product.name.trim !="" && product.price >0 ){
            alert("add product successfully!");
            this.props.onSubmitPrdctForm(this.state);
            this.onReset()
        }else{
            alert("somethings wrong");
        }
        
    }

    onReset() {
        this.setState({
            name:'',
            price: 0,
            status: false
        })
    }

    componentDidMount = () => {
        let edittingProduct = this.props.edittingProduct;
        console.log(edittingProduct);
        console.log('componetDidMount Form');
        if(edittingProduct) {
            console.log('componetDidMount Form');
            this.setState({
                id: edittingProduct.id,
                name: edittingProduct.name,
                price: edittingProduct.price,
                status: edittingProduct.status
            });
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps && nextProps.edittingProduct){
            let edittingProduct = nextProps.edittingProduct;
            this.setState({
                id: edittingProduct.id,
                name: edittingProduct.name,
                price: edittingProduct.price,
                status: edittingProduct.status
            });
        }else if(!nextProps.edittingProduct){
            this.setState({
                id:'',
                name:'',
                price: 0,
                status: false
            })
        }
        
    }
    
    
    

    render() {

        let edittingProduct = this.props.edittingProduct;
        console.log("sssss", edittingProduct);

        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { edittingProduct ? 'Edit Product' : 'Add Product' }
                        {/* Close Btn */}
                        <i className="fas fa-times-circle float-right close-btn" onClick={ this.onClosePrdctForm }></i>
                    </h3>
                </div>
                <div className="panel-body">
                    
                    <form onSubmit={ this.onSubmit }>
                        <div className="form-group">
                            <label >name:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="name"
                                value={ this.state.name }
                                onChange={ this.onHandleChange }
                            />
                        </div>
            
                        <div className="form-group">
                            <label >price:</label>
                            <input 
                                type="number" 
                                className="form-control"
                                name="price"
                                value={ this.state.price }
                                onChange={ this.onHandleChange }
                            />
                        </div>
            
                        <label >status:</label>
                        <select 
                            name="status"  
                            className="form-control"
                            value={ this.state.status }
                            onChange={ this.onHandleChange }
                        >
                            <option value={true}>active</option>
                            <option value={false}>lock</option>
                        </select>
                        
                        <div className="row mt-10">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <button type="submit" className="btn btn-primary float-right" onClick={ this.onSubmit }>Save <i className="fas fa-plus"></i></button>
                            </div>
                            
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <button type="button" className="btn btn-danger float-left" onClick={ this.onReset }>Cancel <i className="fas fa-times"></i></button>
                            </div>
                            
                        </div>
                        
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default ProductForm;



