import React, { Component } from 'react'

export default class Sort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortField:'',
            sortType: 0
        };
    }

    onSort = (sortField, sortType) => {
        console.log(sortField,"  ",sortType);
        this.setState({
            sortField: sortField,
            sortType: sortType
        });
        this.props.onSort(sortField, sortType);
    }

    componentDidMount = () => {
        if(this.props && this.props.sort) {
            let sort = this.props.sort;
            this.setState({
                sortField: sort.field,
                sortType: sort.type
            })
        }
        
    }
    

    render() {

        let { sortField, sortType } = this.state;
        
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    
                <div className="btn-group">
                <button 
                    type="button" 
                    className="btn btn-primary dropdown-toggle" 
                    data-toggle="dropdown" aria-haspopup="true" 
                    aria-expanded="false"
                >
                    Sort By 
                    <span><i className="fas fa-caret-down"></i></span>
                </button>
                    <ul className="dropdown-menu">
                        <li onClick={ () => this.onSort("name", 1) }> 
                            <a> 
                                <span><i className="fas fa-sort-alpha-down"></i></span> 
                                Name 
                                { (sortField ==="name" && sortType === 1) ? <i className="fas fa-check float-right"></i> : '' } 
                            </a>
                        </li>

                        <li onClick={ () => this.onSort("name", -1) }> 
                            <a> 
                                <span><i className="fas fa-sort-alpha-up"></i></span> 
                                Name
                                { (sortField ==="name" && sortType === -1) ? <i className="fas fa-check float-right"></i> : '' }  
                            </a>
                        </li>

                        <li> <hr /> </li>

                        <li onClick={ () => this.onSort("price", 1) }> 
                            <a> 
                                <span><i className="fas fa-sort-numeric-down"></i></span> 
                                Price
                                { (sortField ==="price" && sortType === 1) ? <i className="fas fa-check float-right"></i> : '' }  
                            </a>
                        </li>

                        <li onClick={ () => this.onSort("price", -1) }> 
                            <a> 
                                <span><i className="fas fa-sort-numeric-up"></i></span> 
                                Price
                                { (sortField ==="price" && sortType === -1) ? <i className="fas fa-check float-right"></i> : '' }  
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}
