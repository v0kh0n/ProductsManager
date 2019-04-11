import React, { Component } from 'react';
import './App.css';
import ProductManagerPage from './pages/ProductManagerPage';
import HomePage from './pages/HomePage';
import Header from './components/header/Header';
import CartPage from './pages/CartPage';

class App extends Component {

    render() {
        
        return (
            <div>
                <Header />
                {/* <HomePage /> */}
                <CartPage />
            </div> 

            

        );
    }
}

export default App;
