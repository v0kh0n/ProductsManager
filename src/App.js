import React, { Component } from 'react';
import './App.css';
import ProductManagerPage from './pages/ProductManagerPage';
import HomePage from './pages/HomePage';
import Header from './components/header/Header';
import CartPage from './pages/CartPage';

import { BrowserRouter as Router, Switch, Route, Link } from'react-router-dom';

class App extends Component {

    render() {
        
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={ HomePage } />
                    <Route path="/admin" exact component={ ProductManagerPage } />
                    <Route path="/cart" render={() => <CartPage order="sssssss"/>}/>
                </Switch>
                {/* <CartPage /> */}
            </Router> 

            

        );
    }
}

export default App;
