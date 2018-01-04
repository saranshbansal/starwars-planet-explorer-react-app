import React from 'react';
import Header from './header.js';
import Dashboard from '../dashboard/dashboard.js';

const Layout = (props) => {
    return (
      <div className="App">
        <Header {...props} />
        <Dashboard {...props} />
      </div>
    );
};

export default Layout;
