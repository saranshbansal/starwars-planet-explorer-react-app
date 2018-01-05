/* eslint-disable */
import React from 'react';
import Layout from './layout/layout.js';
import ErrorPage from './sorryPages/404_page.js';

const App = (props) => {
    return (
        <div>
            <Layout {...props} />
        </div>
    );
};

export default App;
