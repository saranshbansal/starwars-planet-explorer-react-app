import React, { Component } from 'react';
import logo from '../../assets/img/starwars1.png';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Star Wars Universe</h1>
            </header>
        );
    }
}

export default Header;