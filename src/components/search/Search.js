import React, { Component } from 'react';


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: ''
        }
    }

    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value
        })
    }

    onSearch = () => {
        let keyWord = this.state.keyWord;

        this.props.onSearch(keyWord);


    }

    render() {

        let { keyWord } = this.state;

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            
                <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search here..."
                    name="keyWord"
                    value= { keyWord }
                    onChange={ this.onHandleChange }
                />
                    <span className="input-group-btn">
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={ this.onSearch }
                        > 
                                <i className="fas fa-search"></i>
                        </button>
                    </span>
                    
                </div>
            </div>
        )
    }
}
