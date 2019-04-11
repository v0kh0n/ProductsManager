import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        let { totalCartItems } = this.props;
        return (
            <header id="aa-header">
                {/* <!-- start header top  --> */}
                <div className="aa-header-top">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="aa-header-top-area">
                        {/* <!-- start header top left --> */}
                        <div className="aa-header-top-left">
                            {/* <!-- start cellphone --> */}
                            <div className="cellphone">
                            <p><span className="fa fa-phone"></span>00-62-658-658</p>
                            </div>
                            {/* <!-- / cellphone --> */}
                        </div>
                        {/* <!-- / header top left --> */}
            
                        <div className="aa-header-top-right">
                            <ul className="aa-head-top-nav-right">
                            <li ><a>Admin</a></li>
                            <li ><a>Login</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* <!-- / header top  --> */}
            
                {/* <!-- start header bottom  --> */}
                <div className="aa-header-bottom">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="aa-header-bottom-area">
                        {/* <!-- logo  --> */}
                        <div className="aa-logo">
                            {/* <!-- Text based logo --> */}
                            <Link to="/">
                                <span className="fa fa-shopping-cart"></span>
                                <p>daily<strong>Shop</strong> <span>Your Shopping Partner</span></p>
                            </Link>
                           
                        </div>
                        {/* <!-- cart box --> */}
                        <div className="aa-cartbox">
                            <Link to="/cart" className="aa-cart-link" >
                                <span className="fa fa-shopping-basket"></span>
                                <span className="aa-cart-title">SHOPPING CART</span>
                                <span className="aa-cart-notify">{ totalCartItems }</span>
                            </Link>
                            
                        </div>
                        {/* <!-- / cart box --> */}

                        {/* <!-- search box --> */}
                        <div className="aa-search-box">
                            <form >
                            <input type="text" placeholder="Search here ex. 'man' "/>
                            <button type="submit"><span className="fa fa-search"></span></button>
                            </form>
                        </div>
                        {/* <!-- / search box --> */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        )
    }
}
