import React, { Component } from 'react';
import Header from './header.js';
import Dashboard from '../dashboard/dashboard.js';

class Layout extends Component {
  render(props) {
    return (
      <div className="App">
        <Header />
        <Dashboard {...props} />
      </div>
    );
  }
}

export default Layout;
