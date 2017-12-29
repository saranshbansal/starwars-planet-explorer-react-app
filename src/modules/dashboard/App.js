import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';
import '../../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Star Wars Universe</h1>
        </header>
        <p className="App-intro">
          Star Wars Universe in currently offline...
        </p>
      </div>
    );
  }
}

export default App;
