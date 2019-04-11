import React, { Component } from 'react'

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curentPage: 1,
            total: 5
        }
    }

    render() {
        return (
            <ul className="pagination">
                <li><a href="#">&laquo;</a></li>
                { this.showPageElements() }
                <li><a href="#">&raquo;</a></li>
            </ul>
        )
    }

    showPageElements = () => {
        let pageEls = [];
        let total = this.state.total;

        for( let i=0; i < total; i++) {
            pageEls.push(
                <li
                    key={ i + 1 }
                    className= { this.state.curentPage === (i+1) ? "active" : "" }
                    onClick = { () => this.onChosePage(i+1) }
                >
                    <a href="#">{ i+1 }</a>
                </li>
            )
        }

        return pageEls;
        
    }

    onChosePage = (page) => {
        console.log(page);
        this.setState({
            curentPage: page
        })
        this.props.onChangePage(page);
    }
}
