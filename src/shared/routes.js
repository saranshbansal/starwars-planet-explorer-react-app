import React from 'react';
import { Switch, Route } from 'react-router-dom'
import App from '../modules/app.js';
import Login from '../modules/login/login.js';
import ErrorComponent from '../modules/sorryPages/404_page.js';

const Routes = () => (
  <div>
    <main>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={App} />
        <Route exact path="/dashboard" component={App} />
        <Route exact path="/error" component={ErrorComponent} />
        <Route path="*" component={ErrorComponent} />
      </Switch>
    </main>
  </div>
);

export default Routes;
