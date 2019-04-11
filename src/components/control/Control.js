import React, { Component } from 'react';
import Search from '../search/Search';
import Sort from '../sort/Sort';

export default class Control extends Component {
     render() {
        return (
            <div className="row mt-10">

                {/* Searching input */}
                <Search onSearch={ this.props.onSearch } />

                {/* Sort Section */}
                <Sort 
                    onSort={ this.props.onSort }
                    sort={ this.props.sort }
                />
                    
            </div>
        )
    }
}
